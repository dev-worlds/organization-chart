<template>
  <table class="chart-table" ref="tableItem">
    <tbody>
    <tr>
      <td :colspan="(data.children?.length * 2) || ''">
        <div
            class="chart-node-content"
            draggable="true"
            @dragstart="emits('dragStart', {data, parent})"
            @dragover.prevent
            @dragenter.prevent
            @drop="emits('dropEvent', data)"
            @touchend="onTouchEnd"
            @touchstart="emits('dragStart', { data, parent })"
            @touchmove="onTouchMove"
            ref="treeItem"
        >
          <slot name="name" :item="data"></slot>
        </div>
      </td>
    </tr>
    <tr class="chart-lines" v-if="data.children?.length">
      <td :colspan="data.children?.length * 2">
        <div class="chart-line-down"></div>
      </td>
    </tr>
    <tr class="chart-lines" style="visibility: inherit;" v-if="data.children?.length">
      <template
          v-if="data.children.length === 1"
      >
        <td>
          <div class="chart-line-down"></div>
        </td>
      </template>
      <template
          v-else
      >
        <td
            v-for="index of (data.children.length * 2)"
            :class="{
              'chart-line-left': index % 2 !== 0,
              'chart-line-right' : index % 2 === 0,
              'chart-line-top': index !== 1 && index !== (data.children.length * 2)
            }"
        >&nbsp;
        </td>
      </template>
    </tr>
    <tr class="chart-nodes" v-if="data.children?.length">
      <td v-for="child in data.children" colspan="2">
        <tree-chart
            :key="child.id"
            :data="child"
            @dragStart="emits('dragStart', $event)"
            @dropEvent="emits('dropEvent', $event)"
            :parent="data"
            :deep="deep + 1"
        >
          <template #name="{item}">{{ item.name }}</template>
        </tree-chart>
      </td>
    </tr>
    </tbody>
  </table>
  <div class="cloak" ref="cloak"></div>
</template>

<script setup>
import TreeChart from "@/components/TreeChart.vue";
import {onMounted, ref} from "vue";

onMounted(() => {
  treeItem.value.tree = props.data
})

const emits = defineEmits(['dragStart', 'dragEnd', 'dragOver', 'dragEnter', 'dragLeave', 'dropEvent']);
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  },
  parent: {
    type: Object,
    default: null
  },
  deep: {
    type: Number,
    default: 0
  }
})
const treeItem = ref(null);
const tableItem = ref(null);
const cloak = ref(null);

const onTouchEnd = (e) => {
  const touch = e.changedTouches[0]
  tableItem.value.style.zIndex = '-1';
  const dropElm = document.elementFromPoint(touch.clientX, touch.clientY);
  tableItem.value.style.position = '';
  cloak.value.style.position = 'absolute';
  cloak.value.style.width = '';
  cloak.value.style.height = '';
  tableItem.value.style.top = '';
  tableItem.value.style.left = '';
  tableItem.value.style.zIndex = '';
  if (dropElm.tree) {
    emits('dropEvent', dropElm.tree)
  }
}

const onTouchMove = (e) => {
  const touch = e.changedTouches[0]
  cloak.value.style.width = tableItem.value.offsetWidth + 'px';
  cloak.value.style.height = tableItem.value.offsetHeight + 'px';
  cloak.value.style.position = 'static';
  tableItem.value.style.position = 'fixed';
  tableItem.value.style.top = touch.clientY - 20 + 'px';
  tableItem.value.style.left = touch.clientX - Math.round(tableItem.value.offsetWidth / 2) + 'px';
}

</script>

<style lang="scss">
.cloak {
  position: absolute;
  z-index: -1;
  visibility: hidden;
}

.chart {
  &-table {
    border-spacing: 0;
    border-collapse: separate;
    margin: 0 auto;

    * {
      box-sizing: border-box;
    }

    tbody > tr > td {
      text-align: center;
      vertical-align: top;
      padding: 0 0.75rem;
    }
  }

  &-node-content {
    border: 1px solid #dee2e6;
    background: #ffffff;
    color: #495057;
    padding: 1.25rem;
    display: inline-block;
    position: relative;
    cursor: pointer;

    &:active {
      cursor: grabbing;
    }
  }

  &-lines {
    user-select: none;
  }

  &-line {
    &-down {
      margin: 0 auto;
      height: 20px;
      width: 1px;
      background: #dee2e6;
    }

    &-left {
      border-right: 1px solid #dee2e6;

    }

    &-top {
      border-top: 1px solid #dee2e6;

    }

    &-top,
    &-left {
      border-color: #dee2e6;
    }

    &-left,
    &-right {
      border-radius: 0;
    }
  }
}


</style>
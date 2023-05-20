<template>
  <table class="chart-table">
    <tbody>
    <tr>
      <td :colspan="data.children?.length * 2">
        <div
            class="chart-node-content"
            draggable="true"
            @dragstart="emits('dragStart', {data, parent})"
            @dragend="emits('dragEnd', data)"
            @dragover="dragOver"
            @dragenter="emits('dragEnter', data)"
            @dragleave="emits('dragLeave', data)"
            @drop="emits('dropEvent', data)"
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
            :data="child"
            @dragStart="emits('dragStart', $event)"
            @dragEnd="emits('dragEnd', $event)"
            @dragOver="emits('dragOver', $event)"
            @dragEnter="emits('dragEnter', $event)"
            @dragLeave="emits('dragLeave', $event)"
            @dropEvent="emits('dropEvent', $event)"
            :parent="data"
        >
          <template #name="{item}">{{ item.name }}</template>
        </tree-chart>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
import TreeChart from "@/components/TreeChart.vue";

const emits = defineEmits(['dragStart', 'dragEnd', 'dragOver', 'dragEnter', 'dragLeave', 'dropEvent'])
;
const props = defineProps({
  data: {
    type: Object,
    default: () => {
    }
  },
  parent: {
    type: Object,
    default: null
  }
})

const dragOver = (e) => {
  e.preventDefault()
}
</script>

<style lang="scss">
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
    user-select: none;

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
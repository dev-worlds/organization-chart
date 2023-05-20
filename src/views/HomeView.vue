<template>
  <tree-chart
      :data="orgStructure[0]"
      v-if="orgStructure.length"
      @dragStart="dragStart"
      @dragEnd="dragEnd"
      @dragEnter="dragEnter"
      @dragLeave="dragLeave"
      @dropEvent="drop">
    <template #name="{item}">{{ item.name }}</template>
  </tree-chart>
  <Loader v-else/>
</template>

<script setup>
import store from "@/store";
import {onMounted, ref} from "vue";
import TreeChart from "@/components/TreeChart.vue";
import {checkNestingElm} from "@/js/utils";
import Loader from "@/components/Loader.vue";

onMounted(() => {
  store.dispatch('loadTreeStructure')
})

const orgStructure = store.getters.getOrgStructure;
const dragElm = ref(null);
const parentDragElm = ref(null);

const dragStart = ({ parent, data }) => {
  dragElm.value = data;
  parentDragElm.value = parent;
}

const dragEnd = () => {
}
const dragEnter = () => {
}
const dragLeave = () => {
}
const drop = (dropElm) => {
  const available = !checkNestingElm(dragElm.value.children, dropElm, 'children')
  if (available) {
    if (dragElm.value !== dropElm) {
      store.commit('changeTreeElms', { elm: dragElm.value, to: dropElm, parentDragElm: parentDragElm.value });
    }
  } else {
    console.error('Нельзя вкладывать внутрь')
  }
  dragElm.value = null;
  parentDragElm.value = null;
}

</script>

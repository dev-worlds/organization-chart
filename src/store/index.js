import {createStore} from 'vuex'
import {orgStructure} from '@/js/data'
import {generateUuidForArray} from "@/js/utils";

export default createStore({
    state: {
        treeStructure: []
    },
    getters: {
        getOrgStructure(state) {
            return state.treeStructure;
        }
    },
    mutations: {
        addOrgStructure(state, data) {
            state.treeStructure.push(...data)
        },
        changeTreeElms(state, { elm, to, parentDragElm }) {
            if ('children' in to) {
                if (to.children.some(child => child === elm)) {
                    return;
                }
            } else {
                to.children = [];
            }
            parentDragElm.children = parentDragElm.children.filter(child => child !== elm)
            to.children.push(elm);
        }
    },
    actions: {
        loadTreeStructure({ commit }) {
            setTimeout(() => {
                generateUuidForArray(orgStructure)
                commit('addOrgStructure', orgStructure)
            }, 3000)
        }
    },
    modules: {}
})

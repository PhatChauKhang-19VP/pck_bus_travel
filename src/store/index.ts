import { InjectionKey } from "vue"
import { createStore, Store } from "vuex"
import { Province } from "../models/Province"
// define your typings for the store state
export interface State {
  provincesSelected: Set<Province>
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    provincesSelected: new Set(),
  },
  getters: {
    getArrayProvincesNames(state) {
      return Array.from(state.provincesSelected.values()).map(
        (province) => `${province.code}. ${province.full_name}`
      )
    },
  },
  mutations: {
    setProvinces(state, provinces: Set<Province>) {
      state.provincesSelected = provinces
    },
    addProvince(state, province: Province) {
      state.provincesSelected.add(province)
    },
    removeProvince(state: State, code: string) {
      state.provincesSelected.forEach((province) => {
        if (province.code === code) {
          state.provincesSelected.delete(province)
        }
      })
    },
  },
  actions: {
    addProvince(context) {
      context.commit("addProvince")
    },
    removeProvince(context) {
      context.commit("removeProvince")
    },
  },
})

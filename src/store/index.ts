import { InjectionKey } from "vue"
import { createStore, Store } from "vuex"
import { Province } from "../models/Province"
import { Tour } from "../models/Tour"
// define your typings for the store state
export interface State {
  provincesSelected: Set<Province>
  tourSearchResult: Tour[]
  filterObject: any
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    provincesSelected: new Set(),
    tourSearchResult: [],
    filterObject: {
      ngay_di: "",
      so_ngay: {
        stt: 1,
        text: "",
        value: "0-9999",
        variant: "outline-primary",
        active: true,
      },
      so_nguoi: 1,
      khoang_gia: {
        low: 0,
        high: 9999999,
      },
    },
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
    setTourSearchResult(state, tours: Tour[]) {
      state.tourSearchResult = tours
    },
    setFilterObject(state, filterObject: any) {
      state.filterObject = filterObject
    },
  },
  actions: {
    addProvince(context) {
      context.commit("addProvince")
    },
    removeProvince(context) {
      context.commit("removeProvince")
    },
    setTourSearchResult(context) {
      context.commit("setTourSearchResult")
    },
    setFilterObject(context) {
      context.commit("setFilterObject")
    },
  },
})

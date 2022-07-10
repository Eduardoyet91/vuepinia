import { defineStore } from 'pinia'

export const useDeletStore = defineStore('delet', {
    state: () => ({
        counter: 0,
       
    }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.counter++
    },
  },
})

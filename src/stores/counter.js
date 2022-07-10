

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 2,
       
    }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.counter++
    },
  },
})


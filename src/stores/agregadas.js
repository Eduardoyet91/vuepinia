

import { defineStore } from 'pinia'

export const useTareasStore = defineStore('add', {
    state: () => ({
        counter: 4,
       
    }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.counter++
    },
    decrement() {
        this.counter--
      },

    
  },
})


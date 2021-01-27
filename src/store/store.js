import { createStore } from "vuex" 

const store = createStore({
   state:{
      cart: [],
   },
   mutations: {
      addLesson (state, n) {
         state.cart.push(n)
       },

       emptyCart(state){
         state.cart = [];
       },
   }
});

export default store
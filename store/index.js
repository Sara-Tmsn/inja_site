import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { user } from './user';



Vue.use(Vuex)


export default () => new Vuex.Store({
  state: () => ({
    // products: [],
    loginDialog: false,
    cart: [],
    shopWindow: [],
    types: [
      // initial value
      { title: 'ارسال رایگان', price: 0, description: '' },
      { title: 'پست', price: 12000, description: '' },
      { title: 'پیک', price: 0, description: 'به عهده مشتری' }
    ]
  }),

  mutations: { //syncronous
    setQuantity(state, payload) {
      state.cart[payload.index].qty = payload.qty
      let toLocal = state.cart.map(item => {
        return {
          id: item.product._id,
          qty: item.qty
        }
      })
      localStorage.setItem("cart", JSON.stringify(toLocal))
    },
    toggleLoginDialog(state) {
      state.loginDialog = !state.loginDialog
    },
    addToCart(state, payload) {
      // console.log(payload)
      if (payload) {
        let found = state.cart.find(item => item.product._id === payload._id);
        if (found) {
          found.qty++;
        } else {
          state.cart.push({
            product: payload,
            qty: 1
          })
        }
        let toLocal = state.cart.map(item => {
          return {
            id: item.product._id,
            qty: item.qty
          }
        })
        localStorage.setItem("cart", JSON.stringify(toLocal))
        // console.log(state.cart)
      }
    },
    updateCart(state, payload) {
      // console.log(payload)
      if (payload) {
        state.cart.push({
          product: payload.product,
          qty: payload.qty
        })
      }
    },
    updateShopWindows(state, payload) {
      if (payload) {
        state.shopWindow.push({
          product: payload.product,
          instock: payload.instock
        })
      }
    },
    addToShopWindow(state, payload) {
      if (payload) {
        for (let post of payload) {
          let found = state.shopWindow.find(item => item.product._id === post._id);
          if (found) {
          } else {
            state.shopWindow.push({
              product: post,
              instock: true
            })
          }
        }
        let toLocal = state.shopWindow.map(item => {
            return {
              id: item.product._id,
              instock: true
            }
          })
          localStorage.setItem("shopWindow", JSON.stringify(toLocal))
      }
    },
    removeProduct(state, payload) {
      state.cart.splice(payload, 1);
      let toLocal = state.cart.map(item => {
        return {
          id: item.product._id,
          qty: item.qty
        }
      })
      localStorage.setItem("cart", JSON.stringify(toLocal))
    },
    addShippingType(state) {
      try {
        state.types.splice(0, 0, {title: '', price: 0, description: ''});
      } catch(e)
      {
        console.log(e);
      }
    }

  },

  actions: { //asyncronous
    updateCartFromLocalStorage({
      state,
      commit
    }, payload) {
      // console.log(payload)
      if (payload && payload.length) {
        payload.forEach(item => {
          axios({
            url: "http://localhost:8080/posts/?" +
              "_id=" +
              item.id,
            method: "GET",
          }).then((response) => {
            commit('updateCart', {
              product: response.data[0],
              qty: item.qty
            })
          });
        });
        console.log(state)
      }
    },
    updateShopWindowsFromLocalStorage({
      state,
      commit
    }, payload){
      console.log(payload)
      if (payload && payload.length) {
        payload.forEach(item => {
          axios({
            url: "http://localhost:8080/posts/?" +
              "_id=" +
              item.id,
            method: "GET",
          }).then((response) => {
            commit('updateShopWindows', {
              product: response.data[0],
              instock: item.instock
            })
          });
        });
        console.log(state)
      }
    }
  }
});

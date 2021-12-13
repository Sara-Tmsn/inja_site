import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { user } from './user';



Vue.use(Vuex)


export default () => new Vuex.Store({
  state: () => ({
    creators:[
      {
        _id: "61811bf8908df91dad7a0afe",
        full_name: "استدیو طراحی ریتون",
        username: "ritoon.design",
        biography: "RITOON is an Iranian design studio based in Tehran making design-oriented products",
        banner_image: [
          "https://i.picsum.photos/id/45/500/300.jpg?hmac=4Ee7BZI2J5ysNej6CdyZBr0mnv0Tb-6VoYahGJVeKC8"
        ],
        phone_number: "+989351142844",
        location: "https://www.google.com/maps/dir/35.7131699,51.3784919/Tehran+Province,+Tehran,+5th+Niroo+Havayi,+%D8%A8%D8%B3%D8%AA%D9%86%DB%8C+%D9%86%D8%B9%D9%85%D8%AA%E2%80%AD%E2%80%AD/@35.7217075,51.3982664,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3f8e0291a3aaeb65:0x28f83faa2efdab0!2m2!1d51.4854435!2d35.7008834",
        profile_pic_url: "https://scontent-frx5-1.cdninstagram.com/v/t51.2885-19/11377447_1601762846779733_898280204_a.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_ohc=Zs-iORmxploAX_tNaFv&edm=ABfd0MgBAAAA&ccb=7-4&oh=625b46170d072252fab33aee9edb6ab5&oe=60EF8B4E&_nc_sid=7bff83",
        profile_pic_url_hd: "https://scontent-frx5-1.cdninstagram.com/v/t51.2885-19/11377447_1601762846779733_898280204_a.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_ohc=Zs-iORmxploAX_tNaFv&edm=ABfd0MgBAAAA&ccb=7-4&oh=625b46170d072252fab33aee9edb6ab5&oe=60EF8B4E&_nc_sid=7bff83}"
      }
    ],
    products: [{
      _id: "618121b6908df91dad7a0b10",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [{
          url: "@/static/ritoon-image/1-1.jpg"
        },
        {
          url: "@/static/ritoon-image/1-2.jpg"
        },
        {
        url: "@/static/ritoon-image/1-3.jpg"
      }
      ],
      caption: "\"ميز ميني ريتون، مخصوص كار از روي مبل، توليد شده به تعداد محدود، رنگ: گردويي روشن، قيمت:\n1,500,000\n#ميزجلومبلي #ميز #ميز_لپ_تاپ #ميز_لپتاپ #چوبي #گردويي #ريتون #استوديو_طراحي_ريتون #خاص #ميز_كار\n#wooden #desk #laptop #laptopdessk #sofa\"",
      product_name: "میز مینی",
      product_price: 1500000,
      numbersAvailable: 10
    }, {
      _id: "618272599ba3267a025c0840",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [{
          url: "@/static/ritoon-image/2-1.jpg"
        },
        {
          url: "@/static/ritoon-image/2-2.jpg"
        }
      ],
      caption: "\"ساعت ريتون مدل pebble سايز بزرگ\n#ritoon #ritoondesign #clock #wooden #woodworking #pebbles #design #wood_design\n#ريتون #ريتون_ديزاين #استوديو_طراحي_ريتون #چوبي #طراحي_داخلي #دكوراسيون_داخلي #دكوراسيون #ساعت #ساعتدیواری ظ#ساعت_ديواري #هديه_خاص #گيفت #گيفت_خاص\"",
      product_name: "ساعت",
      product_price: 180000,
      numbersAvailable: 5
    }, {
      _id: "618272b59ba3267a025c0841",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [{
          url: "@/static/ritoon-image/3-1.jpg"
        },
        {
          url: "@/static/ritoon-image/3-2.jpg"
        },
        {
          url: "@/static/ritoon-image/3-3.jpg"
        },
        {
          url: "@/static/ritoon-image/3-4.jpg"
        }
      ],
      caption: "\"آويز نگهدارنده موز ريتون مدل Tropical Island\n#banana #banana_holder #wood #wooden #wood_design #ritoon #ritoon_design_studio #tableware\n#استندموز_چوبی #استندموز #چوبي #هديه_خاص #گيفت #گيفت_خاص #جهيزيه_عروس #جهيزيه #اوپن_اشپزخانه #آشپزخانه\n\"",
      product_name: "آویز نگهدارنده موز!",
      product_price: 120000,
      numbersAvailable: 15
    }, {
      _id: "618273f89ba3267a025c0842",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [
        {
          url: "@/static/ritoon-image/4-1.jpg"
        },
        {
          url: "@/static/ritoon-image/4-2.jpg"
        },
        {
          url: "@/static/ritoon-image/4-3.jpg"
        }
      ],
      caption: "آويز حوله و لباس ريتون مدل Anchor3 #towelrack #clothhanger #ritoon #design #ritoon_design #ritoon_design_studio #woodworking #wooddesign #استوديو_طراحي_ريتون #استوديو_طراحي #جالباسی #جالباسی_چوبی #جالباسی_خاص #هديه_خاص #هديه #طراحي_داخلي #چوبی",
      product_name: "آويز حوله و لباس!",
      product_price: 100000,
      numbersAvailable: 7
    }, {
      _id: "618274229ba3267a025c0843",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [
        {
          url: "@/static/ritoon-image/6-1.jpg"
        },
        {
          url: "@/static/ritoon-image/6-2.jpg"
        }
      ],
      caption: "\"ده درصد تخفیف تا پایان هفته\nمیز باکسی ریتون 🙂\n.\n#میز #میزچوبی #میزعسلی #پاتختی #چوبی #دکوراسیون_داخلی #دکوراسیون #طراحی #تخفیف\n\"",
      product_name: "میز باکسی",
      product_price: 1200000,
      numbersAvailable: 5
    }, {
      _id: "6182747e9ba3267a025c0844",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [{
        url: "@/static/ritoon-image/7-1.jpg"
      },
      {
        url: "@/static/ritoon-image/7-2.jpg"
      },
      {
        url: "@/static/ritoon-image/7-3.jpg"
      },
      {
        url: "@/static/ritoon-image/7-4.jpg"
      }
      ],
      caption: "\"قاب رومیزی «مو»؛\nبرای اطلاع از قیمت و مشخصات دایرکت بدید 🙂\n\n#قاب # قاب_عکس #طراحی_داخلی #دکوراسیون #دکوراسیون_داخلی #چوبی #قاب_چوبی\"",
      product_name: "قاب رومیزی",
      product_price: 120000,
      numbersAvailable: 5
    }, {
      _id: "61827c289ba3267a025c0845",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [
        {
          url: "@/static/ritoon-image/9-1.jpg"
        },
        {
          url: "@/static/ritoon-image/9-2.jpg"
        },
        {
          url: "@/static/ritoon-image/9-3.jpg"
        }
      ],
      caption: "\"جالباسي Rustic Rose\nحاصل همكاري ريتون و هنار\n#rustic #cloth_hanger #hanger #wood #wooden #rose\n#جالباسي #جالباسي_مدرن #جالباسی_خاص #جالباسي_ديواري #جالباسی_چوبی #استوديو_طراحي #ريتون #هنار #چوبي #جالب #لوكس #لاكچري\n\"",
      product_name: "جالباسی",
      product_price: 1300000,
      numbersAvailable: 50
    }, {
      _id: "61827ca29ba3267a025c0846",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [
        {
          url: "@/static/ritoon-image/10-1.jpg"
        },
        {
          url: "@/static/ritoon-image/10-2.jpg"
        }
      ],
      caption: "\"Smiley Whale Vase\nگلدان وال خندان\n#vase #wood #wooden #whale #design #decor #interiordesign #smiley #ritoon #ritoondesign\n#ريتون #استوديو_طراحي #دكوراسيون_داخلي #چوبي #وال #خندان #گلدان_خاص #گلدان #گلدان_فانتزی #جالب\"",
      product_name: "گلدان وال خندان",
      product_price: 1000000,
      numbersAvailable: 5
    },
    {
      _id: "61827d489ba3267a025c0848",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [
        {
          url: "@/static/ritoon-image/14-1.jpg"
        },
        {
          url: "@/static/ritoon-image/14-2.jpg"
        },
        {
          url: "@/static/ritoon-image/14-3.jpg"
        }
      ],
      caption: "\"مگنت و کاغذ یادداشت MeggNote\nاز همینجا سفارش بدید یا از دیجیکالا بخرید 🌺\"",
      product_name: "مگنت و کاغذ یادداشت",
      product_price: 10000,
      numbersAvailable: 17
    }, {
      _id: "61827db59ba3267a025c0849",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [
        {
          url: "@/static/ritoon-image/15-1.jpg"
        },
        {
          url: "@/static/ritoon-image/15-2.jpg"
        }
      ],
      caption: "\"نمکدان و فلفل‌پاش دومان، طراحی و‌تولید در استودیو دیزاین ریتون.\nاز همین پیج یا از دیجیکالا بخرید 🌼\n\"",
      product_name: "نمک و فلفل‌پاش دومان",
      product_price: 50000,
      numbersAvailable: 12
    }, {
      _id: "61827e0c9ba3267a025c084a",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [
        {
          url: "@/static/ritoon-image/16-1.jpg"
        },
        {
          url: "@/static/ritoon-image/16-2.jpg"
        },
        {
          url: "@/static/ritoon-image/16-3.jpg"
        },
        {
          url: "@/static/ritoon-image/16-4.jpg"
        },
        {
          url: "@/static/ritoon-image/16-5.jpg"
        },
        {
          url: "@/static/ritoon-image/16-6.jpg"
        },
        value {
          url: "@/static/ritoon-image/16-7.jpg"
        },
        {
          url: "@/static/ritoon-image/16-8.jpg"
        },
      ],
      caption: "\"Nostalgia Trivet\nزير قابلمه اي نوستالژي با الهام از يك محصول موجود و تركيب آن با يك فرم نوستالژيك طراحي و توليد شده است.\n#nostalgia #wood #trivet #design #packagingdesign #hotpot #tabletop #homedecor #plywood #kitchendesign #kitchen #utensils\n#چوب #چوبی_تزئینی #چوبي #زيرقابلمه #زيرقاشقي #دكوراسيون #دكوري #ريتون #ديزاين #طراحي_صنعتي #طراحي_داخلي #آشپزخانه_مدرن #آشپزخانه #خانه_شيك #خانه #هديه #گيفت #جالب\n\"",
      product_name: "زیر قابلمه‌ای نوستالژی",
      product_price: 60000,
      numbersAvailable: 17
    }],
    loginDialog: false,
    cart: [],
    shopWindow: [],
    types: [
      // initial value
      {
        title: 'ارسال رایگان',
        price: 0,
        description: ''
      },
      {
        title: 'پست',
        price: 12000,
        description: ''
      },
      {
        title: 'پیک',
        price: 0,
        description: 'به عهده مشتری'
      }
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
          if (found) {} else {
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
        state.types.splice(0, 0, {
          title: '',
          price: 0,
          description: ''
        });
      } catch (e) {
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
    }, payload) {
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

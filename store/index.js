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
        full_name: "گُدار",
        username: "godarhandmade",
        biography: "«گدار» گذرگاهی ست از هنر دیروز به هنر امروز",
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
          url: "https://scontent-frx5-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/210401604_229655698824873_2835650398755344868_n.jpg?_nc_ht=scontent-frx5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=AMIP4KRklEEAX9uLeLN&tn=XQ7HLH7jZxfZSPWx&edm=AP_V10EBAAAA&ccb=7-4&oh=26b1afc9a82abb8f48f87f5594fe72e4&oe=61895DBF&_nc_sid=4f375e"
        },
        {
          url: "https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/209749732_231310808632839_3304588380631291817_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=H24REQ4aQoYAX-Ba9yM&edm=AP_V10EBAAAA&ccb=7-4&oh=0e2fdc4df03612e5db8d07e613148cd0&oe=618847B2&_nc_sid=4f375e"
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
          url: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/152737405_426941311911943_2492360888206575706_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=jmrDBcMth2kAX-tp7m7&edm=AP_V10EBAAAA&ccb=7-4&oh=e0c13c993b2f5a153813319ee8538e91&oe=6188645A&_nc_sid=4f375e"
        },
        {
          url: "https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/152148903_226346989185324_975025721136786635_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=aApHhZtLhSUAX_ZZkMn&edm=AP_V10EBAAAA&ccb=7-4&oh=7267eba95c15275d15b7767f67646164&oe=6189DE72&_nc_sid=4f375e"
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
          url: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/151378112_839065473342186_5348703860064399005_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=O0O0WLIBNXsAX94ov2g&edm=AP_V10EBAAAA&ccb=7-4&oh=57459f647e3be297ec96b3f251701684&oe=6189717D&_nc_sid=4f375e"
        },
        {
          url: "https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/150841475_1117395728710308_1432745720823075251_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=Gf7V-dxHLcsAX89RvpE&edm=AP_V10EBAAAA&ccb=7-4&oh=bc3514aba513c4cda141d4df4b3e1340&oe=6189284D&_nc_sid=4f375e"
        }
      ],
      caption: "\"آويز نگهدارنده موز ريتون مدل Tropical Island\n#banana #banana_holder #wood #wooden #wood_design #ritoon #ritoon_design_studio #tableware\n#استندموز_چوبی #استندموز #چوبي #هديه_خاص #گيفت #گيفت_خاص #جهيزيه_عروس #جهيزيه #اوپن_اشپزخانه #آشپزخانه\n\"",
      product_name: "آویز نگهدارنده موز!",
      product_price: 120000,
      numbersAvailable: 15
    }, {
      _id: "618273f89ba3267a025c0842",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [{
          url: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/147895719_623680331775919_5212679005434191468_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=XeKUS3nXuncAX_EDDkv&edm=AP_V10EBAAAA&ccb=7-4&oh=f1eb245f847a1806d13413ca8349a082&oe=618899D3&_nc_sid=4f375e"
        },
        {
          url: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/148410719_273242604217664_8964493290822991561_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=-k-ekSePwdUAX8PsND_&edm=AP_V10EBAAAA&ccb=7-4&oh=aad925808b046987f06a1385c28148da&oe=6189356C&_nc_sid=4f375e"
        }
      ],
      caption: "آويز حوله و لباس ريتون مدل Anchor3 #towelrack #clothhanger #ritoon #design #ritoon_design #ritoon_design_studio #woodworking #wooddesign #استوديو_طراحي_ريتون #استوديو_طراحي #جالباسی #جالباسی_چوبی #جالباسی_خاص #هديه_خاص #هديه #طراحي_داخلي #چوبی",
      product_name: "آويز حوله و لباس!",
      product_price: 100000,
      numbersAvailable: 7
    }, {
      _id: "618274229ba3267a025c0843",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [{
          url: "https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/127034459_388143052389709_3548098479717600406_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=dSm4YFL9xBoAX-UarIM&edm=AP_V10EBAAAA&ccb=7-4&oh=0c3bdc3a2fbd88ebf6db5b7166d41a95&oe=6189D769&_nc_sid=4f375e"
        },
        {
          url: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/125871105_1751581405010444_2995702687034831920_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=Vy5zkOtQfw8AX-qc5Wx&edm=AP_V10EBAAAA&ccb=7-4&oh=561471dc7273425cd98709808af3c84a&oe=6189CD8A&_nc_sid=4f375e"
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
          url: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/126990214_201627011486788_2288925805854897316_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=bcSMlCnsKaIAX97asUS&edm=AP_V10EBAAAA&ccb=7-4&oh=26753a38c02194a607e7abcb91692340&oe=6188830E&_nc_sid=4f375e"
        },
        {
          url: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/126877843_2779223738957298_1554799321303589299_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=VVEzUtJaN0IAX8Hwe_a&edm=AP_V10EBAAAA&ccb=7-4&oh=8f30ac56ccebb3687f93c8b7d1fa6414&oe=618977AF&_nc_sid=4f375e"
        }
      ],
      caption: "\"قاب رومیزی «مو»؛\nبرای اطلاع از قیمت و مشخصات دایرکت بدید 🙂\n\n#قاب # قاب_عکس #طراحی_داخلی #دکوراسیون #دکوراسیون_داخلی #چوبی #قاب_چوبی\"",
      product_name: "قاب رومیزی",
      product_price: 120000,
      numbersAvailable: 5
    }, {
      _id: "61827c289ba3267a025c0845",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [{
          url: "https://scontent-frx5-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/123382453_271757070918273_1782444052022084422_n.jpg?_nc_ht=scontent-frx5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=xNJqvT4I7iMAX8J2-B9&edm=AP_V10EBAAAA&ccb=7-4&oh=8a08eeee1ea774cfe3b74c6f15a35dc7&oe=6189D202&_nc_sid=4f375e"
        },
        {
          url: "https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/123627866_366763951422433_314217704297487596_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=Ds_BTF9DQNEAX9rLh1x&edm=AP_V10EBAAAA&ccb=7-4&oh=87d31ae31cd1aee9d25cd1bf3ebe0932&oe=618924AD&_nc_sid=4f375e"
        }
      ],
      caption: "\"جالباسي Rustic Rose\nحاصل همكاري ريتون و هنار\n#rustic #cloth_hanger #hanger #wood #wooden #rose\n#جالباسي #جالباسي_مدرن #جالباسی_خاص #جالباسي_ديواري #جالباسی_چوبی #استوديو_طراحي #ريتون #هنار #چوبي #جالب #لوكس #لاكچري\n\"",
      product_name: "جالباسی",
      product_price: 1300000,
      numbersAvailable: 50
    }, {
      _id: "61827ca29ba3267a025c0846",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [{
          url: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/121652379_696449647942842_8378526320391165973_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=4IhYWdTHf9UAX931M8n&edm=AP_V10EBAAAA&ccb=7-4&oh=c99e1ef17f79276163cd6e3d2d11b428&oe=61885EEF&_nc_sid=4f375e"
        },
        {
          url: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/121413982_835221537217712_6051649394464235067_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=64-mVfI8AXYAX83kyE4&edm=AP_V10EBAAAA&ccb=7-4&oh=971fa9fd46c7f40a78cd32fd8aaa6a19&oe=61893F71&_nc_sid=4f375e"
        }
      ],
      caption: "\"Smiley Whale Vase\nگلدان وال خندان\n#vase #wood #wooden #whale #design #decor #interiordesign #smiley #ritoon #ritoondesign\n#ريتون #استوديو_طراحي #دكوراسيون_داخلي #چوبي #وال #خندان #گلدان_خاص #گلدان #گلدان_فانتزی #جالب\"",
      product_name: "گلدان وال خندان",
      product_price: 1000000,
      numbersAvailable: 5
    }, {
      _id: "61827ce49ba3267a025c0847",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [{
        url: "https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/94834639_230380321630273_8286884218672841777_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=KtSH4WP1-zEAX95I-iR&tn=XQ7HLH7jZxfZSPWx&edm=AP_V10EBAAAA&ccb=7-4&oh=79affa414b1a717ecdbfeddf7ea82e3b&oe=6188AA14&_nc_sid=4f375e"
      }],
      caption: "\"ساعت دیواری pebble\nاز پیجمون در دیجیکالا بخرید یا از همینجا سفارش بدید\n\"",
      product_name: "ساعت دیواری",
      product_price: 980000,
      numbersAvailable: 6
    }, {
      _id: "61827d489ba3267a025c0848",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [{
          url: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/91462286_859662174539072_8246554938017748869_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=p3yhfAJlx7UAX-dweE9&edm=AP_V10EBAAAA&ccb=7-4&oh=52ce07dc5a4ed9afaf60d9c6f20f6fa6&oe=6189A019&_nc_sid=4f375e"
        },
        {
          url: "https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/91809515_2880152642078523_3256662690236593800_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=fKmB6d1LXasAX9R76kN&edm=AP_V10EBAAAA&ccb=7-4&oh=ba0ef927ab7e3262547cd363ca98a866&oe=61899353&_nc_sid=4f375e"
        },
        {
          url: "https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/92228837_934674136950221_1000399478345342340_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Np4Er9BE-ZcAX8MuG0P&edm=AP_V10EBAAAA&ccb=7-4&oh=68b282904f506969077164e0d92ee996&oe=6189B0AF&_nc_sid=4f375e"
        }
      ],
      caption: "\"مگنت و کاغذ یادداشت MeggNote\nاز همینجا سفارش بدید یا از دیجیکالا بخرید 🌺\"",
      product_name: "مگنت و کاغذ یادداشت",
      product_price: 10000,
      numbersAvailable: 17
    }, {
      _id: "61827db59ba3267a025c0849",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [{
          url: "https://scontent-frx5-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/91408749_2572120316384841_1411225814254166018_n.jpg?_nc_ht=scontent-frx5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=OTwsAIpF5U0AX-7OUXn&tn=XQ7HLH7jZxfZSPWx&edm=AP_V10EBAAAA&ccb=7-4&oh=77792ea26ea80563a4902d1dfd1a5972&oe=6188AFCA&_nc_sid=4f375e"
        },
        {
          url: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/91835621_1587245618117840_6473322836496015430_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=ko7ckyqyk0cAX-BrFMw&edm=AP_V10EBAAAA&ccb=7-4&oh=b06335069bf679f344d4b4781c31ad4e&oe=61893B7F&_nc_sid=4f375e"
        }
      ],
      caption: "\"نمکدان و فلفل‌پاش دومان، طراحی و‌تولید در استودیو دیزاین ریتون.\nاز همین پیج یا از دیجیکالا بخرید 🌼\n\"",
      product_name: "نمک و فلفل‌پاش دومان",
      product_price: 50000,
      numbersAvailable: 12
    }, {
      _id: "61827e0c9ba3267a025c084a",
      _creator: "61811bf8908df91dad7a0afe",
      contents: [{
          url: "https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/82553873_103925521098048_8520946310920826995_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=_BCRtW55XvMAX_7_gvx&edm=AP_V10EBAAAA&ccb=7-4&oh=0a96341d11f7032e8b8f36a7e181b9c3&oe=618A1541&_nc_sid=4f375e"
        },
        {
          url: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/83035649_197416448125002_7075022018576269370_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=HvkUmEaPPM0AX_LBd4Z&edm=AP_V10EBAAAA&ccb=7-4&oh=f01c45b638d0d079c344a791098d643d&oe=6188EAC1&_nc_sid=4f375e"
        },
        {
          url: "https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/80303103_486246378745623_8445699292284222995_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=dTAHnZzIpCUAX8jGj7h&edm=AP_V10EBAAAA&ccb=7-4&oh=4a0e52ac2c06e1d77dffea5ebe2bc1e0&oe=6189112E&_nc_sid=4f375e"
        },
        {
          url: "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/81359084_800154777132748_1496046998665768719_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=CUrtnUIS6PUAX8-bW71&tn=XQ7HLH7jZxfZSPWx&edm=AP_V10EBAAAA&ccb=7-4&oh=acd198205d64ae4cd57672dba1f8f169&oe=6189B9BF&_nc_sid=4f375e"
        }
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

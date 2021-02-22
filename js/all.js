let app = new Vue({
    el: "#app",
    data:{
        money:[
            {name:"台灣(台幣)",buy: 1,sell: 1},
            {name:"美國(美金)",buy: 27.515,sell: 28.185},
            {name:"日本(日圓)",buy: 0.252,sell: 0.268},
            {name:"韓國(韓元)",buy: 0.02336,sell: 0.02726},            
            {name:"香港(港幣)",buy: 3.445,sell: 3.649},
            {name:"歐洲(歐元)",buy: 33.07,sell: 34.41},
            {name:"英國(英鎊)",buy: 37.96,sell: 40.08},
            {name:"中國大陸(人民幣)",buy: 4.221,sell: 4.383},
            {name:"新加坡(新加坡幣)",buy: 20.52,sell: 21.43},
            {name:"泰國(泰幣)",buy: 0.8021,sell: 0.9921},
            {name:"越南(越南盾)",buy: 0.00082,sell: 0.00132},
            {name:"馬來西亞(馬來幣)",buy: 5.79,sell: 7.415},
            {name:"澳洲(澳幣)",buy: 21.62,sell: 22.4},
            {name:"紐西蘭(紐元)",buy: 19.95,sell: 20.8},
            {name:"加拿大(加拿大幣)",buy: 21.63,sell: 22.54}
        ],
        inputVal: "",
        a: false,
    }
});
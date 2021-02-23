let app = new Vue({
    el: "#app",
    data:{
        money:[
            {name:"台灣<br>(台幣)",buy: 1,sell: 1},
            {name:"美國<br>(美金)",buy: 27.515,sell: 28.185},
            {name:"日本<br>(日圓)",buy: 0.252,sell: 0.268},
            {name:"韓國<br>(韓元)",buy: 0.02336,sell: 0.02726},            
            {name:"香港<br>(港幣)",buy: 3.445,sell: 3.649},
            {name:"歐洲<br>(歐元)",buy: 33.07,sell: 34.41},
            {name:"英國<br>(英鎊)",buy: 37.96,sell: 40.08},
            {name:"中國大陸<br>(人民幣)",buy: 4.221,sell: 4.383},
            {name:"新加坡<br>(新加坡幣)",buy: 20.52,sell: 21.43},
            {name:"泰國<br>(泰幣)",buy: 0.8021,sell: 0.9921},
            {name:"馬來西亞<br>(馬來幣)",buy: 5.79,sell: 7.415},
            {name:"澳洲<br>(澳幣)",buy: 21.62,sell: 22.4},
            {name:"紐西蘭<br>(紐元)",buy: 19.95,sell: 20.8},
            {name:"加拿大<br>(加拿大幣)",buy: 21.63,sell: 22.54}
        ],
        inputVal: "",
        a: false,
        isBuy: true,
        isSell: true,
        isRate: true
    },
    methods:{
        sortBuy: function(){
            if(this.isBuy == true){
                this.money.sort((x,y) => y.buy - x.buy);
                this.isBuy = false;
            }else if(this.isBuy == false){
                this.money.sort((x,y) => x.buy - y.buy);
                this.isBuy = true;
            }
        },
        sortSell: function(){
            if(this.isSell == true){
                this.money.sort((x,y) => y.sell - x.sell);
                this.isSell = false;

            }else if(this.isSell == false){
                this.money.sort((x,y) => x.sell - y.buy);
                this.isSell = true;
            }
        }
    },
    computed:{
        FloatSubtraction: function(){
            return function(arg1,arg2){
                var r1, r2, m, n;
                try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
                try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
                m = Math.pow(10, Math.max(r1, r2));
                n = (r1 >= r2) ? r1 : r2;
                return ((arg1 * m - arg2 * m) / m).toFixed(n);
            }
        },
        FloatMul: function(){
            return function(arg1, arg2){
                var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
                try { m += s1.split(".")[1].length; } catch (e) { }
                try { m += s2.split(".")[1].length; } catch (e) { }
                return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
            }   
        }
    },
    watch:{
        
    }
});
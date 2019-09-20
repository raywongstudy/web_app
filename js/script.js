new Vue({
    el:'#header',
    data:{
        menuShow:false
    }
})
var data = new Vue({
    el:'#data',
    data:{
        link:"https://maps.google.com.tw/maps?f=q&hl=zh-TW&z=16&output=embed&geocode=&q=",
        shops:[]
    },
    mounted(){
        console.log(this.menuShow)
        fetch('https://mobile-web-design-skill-competition.netlify.com/shops.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            this.data.shops = result
            console.log(this.data.shops);
        });
        this.insertMap()
    },methods:{
        insertMap(){
            return this.test
        }
    }
})

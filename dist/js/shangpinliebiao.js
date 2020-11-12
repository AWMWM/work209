//拿到商品
$.ajax({
    type: "Get",
    url: 'http://jx.xuzhixiang.top/ap/api/productlist.php?pagesize=12',
    data: {
        uid: 10096
    },
    success: function(res) {
        console.log(res.data)
        let html = ''
        res.data.forEach(v => {
            html += `<div id="list_1">
                <img src="${v.pimg}" alt="">
                <span>${v.pname}</span>
                <span>${v.pprice}</span>
                <a href="gouwuche.html"><button>加入购物车</button></a>
            </div>`

        })
        $('#container_main').html(html)
    }
})
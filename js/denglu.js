// ajax登录
$('.submit').click(function() {
    var zh = $(".text").val();
    var mi = $(".password").val();
    console.log(zh);
    console.log(localStorage.getItem('name'));
    console.log(localStorage.getItem('password'));
    var a = localStorage.getItem('name');
    var b = localStorage.getItem('password');
    $.ajax({
        url: "http://jx.xuzhixiang.top/ap/api/reg.php",
        type: "GET",
        data: {
            username: $(".text").val(),
            password: $(".password").val()

        },
        success: function(res) {
            // console.log(res);
            // console.log(res.code);
            // console.log(res.msg);
            // 根据注册响应结果判断，执行不同的数据提示
            if (zh !== a || mi != b) {

                alert("登录失败")

                // 注册成功跳转到登录页面
                location.href = "../html/zhuce.html"

            } else {

                alert("登录成功");
                //将id号  用户名  最后登录时间 存储在本地
                localStorage.setItem("id", res);

                localStorage.setItem("name", $(".text").val());

                // localStorage.setItem("endTime", new Date().getTime() + 20 * 1000); 
                location.href = '../index.html';

            }
            // if () {
            //     alert("登陆失败")
            // }
        }
    })
})

// $('.submit').click(function() {
//    
//     $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
//         username: zh,
//         password: mi
//     }, data => {
//         console.log(data)
//     },)
// })
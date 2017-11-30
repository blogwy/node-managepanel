$(function () {
  $('form').on('submit', function (e) {
    e.preventDefault();
    var uname = $('#userid').val();
    var pwd = $('#pwd').val();
    if(uname && pwd){
      $.ajax({
        url: '/admin/signinadmin',
        method: 'post',
        data: $('form').serialize(),
        success: function (res) {
          if(!res.code){
            layer.msg(res.msg, {
              icon: 1,
              time: 1000
            });
            setTimeout(function () {
              location.href = "/admin"
            },2000)
          }else{
            layer.msg(res.msg, {
              icon: 2,
              time: 1000
            });
          }
        },
        error: function (err) {
          console.error(err)
          throw new Error(err)
        }
      })
    }else{
      layer.msg('请输入用户名或密码', {
        icon: 0,
        time: 1000
      });
    }
	})
})
$(function () {
	$('form').on('submit', function (e) {
    e.preventDefault();
    var real = $('#realn').val();
    var uname = $('#idd').val();
    var pwd = $('#pw').val();
    var confirmpwd = $('#confirm_p').val();
    if(real && uname && pwd && confirmpwd){
      if(pwd == confirmpwd){
        if(real =='管理员' || uname =='admin'){
          layer.msg('用户名或id不能注册', {
            icon: 1,
            time: 1000
          });
        }else{
          $.ajax({
            url: '/admin/signup',
            method: 'post',
            data: $('form').serialize(),
            success: function (res) {
              if(!res.code){
                layer.msg(res.msg, {
                  icon: 1,
                  time: 1000
                });
                setTimeout(function () {
                  location.href = "/admin/signin"
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
        }
      }else{
        layer.msg('两次输入密码不一致', {
          icon: 0,
          time: 1000
        });
      }
    }else{
      layer.msg('请输入用户名或密码', {
        icon: 0,
        time: 1000
      });
    }
	})
})
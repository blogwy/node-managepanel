
$(function () {
	$('form').on('submit', function (e) {
    e.preventDefault();
    var realname = $('#realname').val();
    var userid = $('#userid').val();
    if (realname == '管理员' || userid == 'admin'){
      layer.msg('用户名或id不能注册', {
        icon: 0,
        time: 1000
      });
    }else{
      $.ajax({
        url: '/admin/personal',
        method: 'post',
        data: $('form').serialize(),
        success: function (res) {
          if(!res.code){
            layer.msg(res.msg, {
              icon: 1,
              time: 1000
            });
            setTimeout('location.reload()',1000);
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
	})
})
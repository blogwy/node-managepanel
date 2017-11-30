
$(function () {
	$('form').on('submit', function (e) {
    e.preventDefault();
    var pwd = $('#pwd').val();
    var confirmpwd = $('#confirmpwd').val();
    if (pwd == confirmpwd){
      $.ajax({
        url: '/admin/editcs',
        method: 'post',
        data: $('form').serialize(),
        success: function (res) {
          if(!res.code){
            layer.msg(res.msg, {
              icon: 1,
              time: 1000
            });
            console.log('修改成功');
          }else{
            layer.msg(res.msg, {
              icon: 2,
              time: 1000
            });
            console.log('修改失败');
          }
        },
        error: function (err) {
          console.error(err)
          throw new Error(err)
        }
      })
    }else{
      layer.msg('两次密码不一致', {
        icon: 0,
        time: 1000
      });
    }
	})
})
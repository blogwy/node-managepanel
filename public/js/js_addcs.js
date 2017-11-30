
$(function () {
	$('form').on('submit', function (e) {
    e.preventDefault();
    var pwd = $('#pwd').val();
    var confirmpwd = $('#confirm-pwd').val();
    if (pwd == confirmpwd){
      $.ajax({
        url: '/admin/add-cs',
        method: 'post',
        data: $('form').serialize(),
        success: function (res) {
          if(!res.code){
            layer.msg('添加客服成功', {
              icon: 1,
              time: 1000
            });
            setTimeout("location.href = '/admin/cs-list'",1000)
          }
        },
        error: function (err) {
          console.error(err)
          throw new Error(err)
        }
      })
    }else{
      layer.msg('两次输入密码不一致', {
        icon: 0,
        time: 1000
      });
    }
	})
})
$(function () {
  var rename = ($('#realname').text()).replace(/\s/g, "");
  if (rename == '管理员'){
    console.log('您是管理员');
  }else{
    $('.clic').attr({href: '#'});
    $('.clic').click(function (e) {
      e.preventDefault();
      layer.msg('您是客服，拥有部分权限', {
        icon: 0,
        time: 1000
      });
    })
    console.log('您是客服');
  }
})
$(function () {
  var rename = ($('#realname').text()).replace(/\s/g, "");
  if (rename == '管理员'){
      console.log('您是管理员');
  }else{
    $('#adduser').css('display','none');
    $('#addshop').css('display','none');
    $('#addcs').css('display','none');
    console.log('您是客服');
  }
})
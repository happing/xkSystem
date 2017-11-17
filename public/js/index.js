$(function(){
  //获取浏览器视口高度；
  var height = window.screen.availHeight;
  var ch = height -130-50-10-5-5-2;
  $('.content').css('height',ch+'px');
  $('.navLeft').css('height',ch+'px');
  //为左侧栏绑定事件
    //先解绑再绑定
  $('.navLeft dd').off();
  $('.navLeft dd').on('click',function(){
    var page = $(this).attr('page');
    $('section.content').load(page);
  });
  //默认点击显示全部
  $('.navLeft dd').eq(0).trigger('click');
})
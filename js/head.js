// 监听事件
window.addEventListener('scroll', function () {
  let t = $('container, html').scrollTop(); // 目前监听的是整个body的滚动条距离
  if (t > 0) {
    $('.header').addClass('bian');
  } else {
    $('.header').removeClass('bian');
  }
});

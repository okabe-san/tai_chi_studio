$(document).on('ready', () => {
  console.log('connected');
});
$(window).scroll(function() {
    $('.dayScroll')
    .css('opacity', 1 - $(window)
    .scrollTop() / 100);
  });

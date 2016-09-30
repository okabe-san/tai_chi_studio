$(document).on('ready', () => {
  console.log('connected to classes.js');
  function appendSchedule($id, $className) {
    return $($id).appendTo($($className));
  }
  function secretary() {
    for (let i = 6; i < 12; i++) {
      if (i > 9) {
        appendSchedule($('.' + i + '00am'), $('#' + i + '00am'));
      }
      else {
        appendSchedule($('.0' + i + '00am'), $('#0' + i + '00am'));
      }
    }
  }
  appendSchedule($('.0100pm'), $('#0100pm'));
});
// $(window).scroll(function() {
//     $('.dayScroll')
//     .css('opacity', 1 - $(window)
//     .scrollTop() / 250);
//   });

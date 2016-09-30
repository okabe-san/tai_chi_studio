$(document).on('ready', () => {
    console.log('connected to classes.js');
    function appendSchedule($id, $className) {
      $($id).appendTo($($className))
    }
    function secretary(meridian) {
      for (let i = 1; i < 12; i++) {
        if (i >= 10) {
          appendSchedule($('.'+ i + '00' + meridian), $('#' + i + '00' + meridian))
        }
        else {
          appendSchedule($('.0'+ i + '00' + meridian), $('#0' + i + '00' + meridian))
        }
      }
    }
    function filterDay(dayAbbrev, day) {
      $('.' + dayAbbrev).on('click', function() {
        $('.' + day).fadeIn('slow').css('display', 'block');
      })
      .off()
    }
    filterDay('mon', 'Monday');
    filterDay('tues', 'Tuesday');
    filterDay('wed', 'Wednesday');
    filterDay('thurs', 'Thursday');
    filterDay('fri', 'Friday');
    // $('.mon').on('click', function() {
    //   $('.Monday').css('display', 'block');
    // })

    secretary('am');
    secretary('pm');


});

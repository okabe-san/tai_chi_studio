$(document).ready(function() {
  console.log('Hello world');
});

$(document).ready(function () {
  $.ajax ({
    url:'http://fortunecookieapi.com/v1/fortunes?limit=&skip=&page=' + Math.floor(Math.random() * 6),
    method: 'GET',
    data: 'json'
  })
  .done ((data) => {
    const length = data.length;
    //console.log(length);
    const num = Math.floor(Math.random() * length);
    console.log(data['' + num].message);
    const fortune = data['' + num].message;
    $('div.hidden').fadeIn('slow').removeClass('hidden');
    $('#fortune').append('<p>' + fortune + '</p>');
  })
  .fail((err) => {
    console.log(err);
  });
});

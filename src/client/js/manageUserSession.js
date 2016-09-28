(function () {

  console.log('manage user sessions');
  console.log('session: ', sessionStorage.getItem('first_name'));

  if ((sessionStorage.getItem('id') > -1) && (sessionStorage.getItem('first_name') !== null))  {
    $('#loginLink > a').text(sessionStorage.getItem('first_name'));
  }
})();

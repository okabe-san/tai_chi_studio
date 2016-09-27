(function () {

  console.log('sign in sanity check!');

  $('#signInButton').on('click', (event) => {
      event.preventDefault();

      const userPayload = {
        email: $('#sign_in_email').val(),
        password: $('#sign_in_password').val()
      };

      //PUT request with payload for server
      $.ajax({
        type: 'POST',
        url: '/users/signin',
        data: userPayload
      })
      .done((data) => {
        console.log('data: ', data);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('id', data.id);
        window.location.href = '/users/' + data.id;
      });
    });
})();

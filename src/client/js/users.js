
(function () {

    console.log('users sanity check!');

    $('#saveUserButton').on('click', (event) => {
      event.preventDefault();

      // validateUserInfo
      if ($('#email').val() === null ||
          $('#firstName').val() ===  null ||
          $('#lastName').val() === null ||
          $('#line_1').val() === null ||
          $('#city').val() === null ||
          $('#state').val() === null ||
          $('#zip').val() === null
      ) {
        //validate against unpopulated fields
        console.log('validating everything');
        $('#response_message').append('<p>Please fill in the require fields</p>');
      } else if (!$('#tc_checkbox').val()) {
        //return an error if TCs isn't checked
        console.log('terms and conditions');
        $('#response_message').append('<p>Please check Agreed for Terms and Conditions</p>');
      } else {
        const userPayload = {
          email: $('#email').val(),
          first_name: $('#firstName').val(),
          last_name: $('#lastName').val(),
          address_line_1: $('#line_1').val(),
          address_line_2: $('#line_2').val(),
          city: $('#city').val(),
          state: $('#state').val(),
          zip: $('#zip').val(),
          liability: true,
          comments: $('#comments').val(),
          password: $('#inputPassword').val()
        };

        //PUT request with payload for server
        $.ajax({
          type: 'POST',
          url: '/users/signup',
          data: userPayload
        })
        .done((data) => {
          sessionStorage.setItem('email', $('#email').text());
          sessionStorage.setItem('first_name', $('#firstName').text());
          sessionStorage.setItem('id', $('#user_id').text());
          window.location.href = '/users/' + $('#user_id').text();
        });
      }
    });
  })();

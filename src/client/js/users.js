//validate sign in
(function () {

  console.log('users sanity check!');

  $('#signInButton').on('click', (event) => {
    event.preventDefault();

    const userPayload = {
      email: $('#sign_in_email').val(),
      password: $('#sign_in_password').val()
    };

    $.ajax({
      type: 'GET',
      url: '/users/verify',
      data: userPayload
    })
    .done((returnPayload) => {
      console.log('returnPayload: ', returnPayload);

      $.ajax({
        type: 'GET',
        url: '/users/' + returnPayload.id,
        data: returnPayload
      })
      .done((userData) => {
        console.log('here is the user page');
      });
    })
    .fail((error) => {
      console.log(error);
    });
  });

  $('#saveUserButton').on('click', (event) => {
    event.preventDefault();

    console.log('here I am in the local javascript for sign in');

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
        //reload page to show updates
        //location.reload();
        console.log('updated and back to the local jquery');
      })
      .fail((error) => {
        console.log(error);
      });
    }
  });

  function isBlank(input) {
    //validate sign up
    console.log('in isBlank');
    //validate edit
  }

})();

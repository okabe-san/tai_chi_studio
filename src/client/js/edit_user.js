// $(document).on('ready', function(event) {
// event.preventDefault();

// console.log('on the load of edit user: ', req.params.id);
//
// var edit_URL = 'users/edit' + req.params.id;
//
// //PUT request with payload for server
// $.ajax({
//   type: 'GET',
//   url: edit_URL
// })
// .done((data) => {
//   //reload page to show updates
//   //location.reload();
//   console.log('updated and back to the local jquery');
// })
// .fail((error) => {
//   console.log(error);
// });
// $('#email').val({renderObject.email});
// $('#firstName').val();
// $('#lastName').val();
// $('#line_1').val();
// $('#line_2').val();
// $('#city').val();
// $('#state').val();
// $('#zip').val();
// $('#comments').val();
// $('#inputPassword').val();

//   $('#saveUserButton').on('click', (event) => {
//     event.preventDefault();
//
//     console.log('here I am in the local javascript for EDIT USER');
//
//     const userPayload = {
//       email: $('#email').val(),
//       first_name: $('#firstName').val(),
//       last_name: $('#lastName').val(),
//       address_line_1: $('#line_1').val(),
//       address_line_2: $('#line_2').val(),
//       city: $('#city').val(),
//       state: $('#state').val(),
//       zip: $('#zip').val(),
//       liability: true,
//       comments: $('#comments').val(),
//       password: $('#inputPassword').val()
//     };
//
//     var edit_URL = 'edit/users/' + renderObject.id;
//
//     //PUT request with payload for server
//     $.ajax({
//       type: 'PUT',
//       url: edit_URL,
//       data: userPayload
//     })
//     .done((data) => {
//       //reload page to show updates
//       //location.reload();
//       console.log('updated and back to the local jquery');
//     })
//     .fail((error) => {
//       console.log(error);
//     });
//   });
// });

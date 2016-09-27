$(document).on('click', '.delete_class', function() {
  const answer = confirm('Are you sure? This can\'t be undone');

  if (answer) {
    const classID = $(this).attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: `/classes/${classID}/class/delete`
    })
    .done((data) => {
      window.location.href = '/classes';
    })
    .fail((err) => {
      console.log(err);
    });
  }
});

$(document).on('click', '.delete-instructor', function() {

  const answer = confirm('Are you sure? This can\'t be undone');

  if (answer) {
    let tempId = document.getElementById('deleteId');
    const id = parseInt(tempId.value);
    $.ajax({
      type: 'DELETE',
      url: `/instructors/${id}`
    })
    .done((data) => {
      window.location.href = '/instructors';
    })
    .fail((err) => {
      console.log(err);
    });
  }
});

$(document).on('click', '.edit-instructor', function() {
  let tempId = document.getElementById('editId');
  const id = parseInt(tempId.value);
  window.location.href = '/instructors/edit/' + id + '';
});

/* globals google */
function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

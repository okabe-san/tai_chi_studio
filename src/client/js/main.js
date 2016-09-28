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

$('#edit_class_func').on('click', function(e) {
  e.preventDefault();
  console.log('I am in my edit class function!!!');
  const updatedClassName = $('#class_name option:selected').text();
  const updatedInstructor = $('#instructor option:selected').text();
  const updatedDay = $('#day option:selected').text();
  const updatedStart_time = $('#start_time option:selected').text();
  const updatedEnd_time = $('#end_time option:selected').text();
  const updatedSize = $('#size option:selected').text();
  const updatedDescription = $('#description option:selected').text();
  const id = $('#id').attr('value');
  console.log(id);
  console.log(`classes/${id}/class/edit`);

  const update = {
    name: updatedClassName,
    description: updatedDescription,
    instructor_id: updatedInstructor,
    day: updatedDay,
    start_time: updatedStart_time,
    end_time: updatedEnd_time,
    size: updatedSize
  };

  $.ajax({
    type: 'POST',
    url: `/classes/${id}/class/edit`,
    data: update
  })
  .done((data) => {
    window.location.href = `/classes/${id}/class`;
  })
  .fail((err) => {
    console.log(err);
  });
});

/* globals google */
function initMap() {
  var uluru = {lat: 39.742043, lng: -104.991531};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

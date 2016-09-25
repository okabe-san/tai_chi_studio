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

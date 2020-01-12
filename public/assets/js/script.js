$(() => {
  $('#welcome-button').on('click', (event) => {
    event.preventDefault();
    window.location.replace('/ipsum.html');
  });

});

$(() => {
  $('#welcome-button').on('click', (event) => {
    event.preventDefault();
    window.location.replace('/larryDefined.html');
  });
});

// START OF FOUNDATION JAVASCRIPT ===========================================================================================
$('[data-menu-underline-from-center] a').addClass("underline-from-center");
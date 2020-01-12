
$(document).ready(() => {

  $('#ipsumCreate').on('click', (event) => {

    event.preventDefault();

    $.get('/api/ipsum', (data) => {
      console.log(data);
    });
  });

  // below is for creating new Larrys, I can't seem to get the value from #newLarry
  const larryText = $('#newLarry').val().trim();
  const larryEntry = `${larryText} so, call it Larry.`;

  function newLarry(event) {
    event.preventDefault();
    const larry = {
      quote: larryEntry,
    };
    console.log(larryText);
    $.post('/api/ipsum', larry);
  }

  $(document).on('click', '#larryCreate', newLarry);
});

// START OF FOUNDATION JAVASCRIPT ===========================================================================================
$('[data-menu-underline-from-center] a').addClass('underline-from-center');


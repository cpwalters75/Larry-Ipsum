
$(document).ready(() => {
  const ipsumText = document.querySelector('#label');
  const getContent = function (paraQuantity, paraLength) {
    let queryString = '/api/ipsum/';
    queryString += paraQuantity;
    queryString += '/';
    queryString += paraLength;
    $('#label').text('');
    $.get(queryString, (data) => {
      let ipsum = '';
      let counter = 0;
      const count = 0;
      console.log(data);
      data.ipsum.forEach((line) => {
        ipsum += `${line.quote} `;
        counter += 1;
        if (counter >= data.length) {
          $('#label').append(`<p data-set = "ipsum">${ipsum}</p>`);
          counter = 0;
          ipsum = '';
        }
      });
    });
  };


  // START OF CLICK EVENTS ----------------------------------------------------------
  $('#ipsum-create').on('click', (event) => {
    event.preventDefault();
    const paraLength = $('#para-length').val();
    const paraQuantity = $('#para-quantity').val();
    getContent(paraQuantity, paraLength);
  });



  // below is for creating new Larrys

  function newLarry(event) {
    event.preventDefault();
    const larryText = $('#new-larry').val();
    const larryEntry = `${larryText} so, call it Larry.`;
    const larry = {
      quote: larryEntry,
    };

    $.post('/api/ipsum', larry);
  }

  $(document).on('click', '#larry-create', newLarry);


  // START OF FOUNDATION JAVASCRIPT ===========================================================================================
  $('[data-menu-underline-from-center] a').addClass('underline-from-center');

  // START OF EMAIL FEATURE ===================================================================================================


  function sendEmail(event) {
    event.preventDefault();
    const emailTo = $('#larry-email').val();
    const emailText = $('#label').text();
    const emailParams = {
      to: emailTo,
      text: emailText,
    };
    $.post('/api/send', emailParams);
  }

  $(document).on('click', '#email-button', sendEmail);
});

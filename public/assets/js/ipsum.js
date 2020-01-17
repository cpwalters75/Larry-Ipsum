
$(document).ready(() => {
  const getContent = function (paraQuantity, paraLength) {
    let queryString = '/api/ipsum/';
    queryString += paraQuantity;
    queryString += '/';
    queryString += paraLength;
    $('#label').text('');
    $.get(queryString, (data) => {
      let ipsum = '';
      let counter = 0;
      let count = 0;
      console.log(data);
      data.ipsum.forEach((line) => {
        ipsum += line.quote + " ";
        counter += 1;
        if (counter >= data.length) {
          count += 1;
          let newPara = document.createElement('p');
          newPara.setAttribute("data-set","ipsum");
          newPara.setAttribute("data-num",`${count}`);
          console.log(count);
          $('#label').append(`<p data-set = "ipsum">${ipsum}</p>`);
          // $('p').data("num", `${count}`).text(ipsum);
          counter= 0;
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
    const emailText = $('#publish-ipsum').text();
    const emailParams = {
      to: emailTo,
      text: emailText,
    };
    $.post('/api/send', emailParams);
  }

  $(document).on('click', '#email-button', sendEmail);


});

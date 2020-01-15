
$(document).ready(() => {

const getContent = function (paraQuantity, paraLength) {
  let queryString = "/api/ipsum/";
  queryString += paraQuantity;
  queryString += "/";
  queryString += paraLength;
  console.log(queryString);
  $.get(queryString, function(data) {
    console.log(data);
  $("#publish-ipsum").text(data);
  })
};



// START OF CLICK EVENTS ----------------------------------------------------------
  $('#ipsum-create').on('click', (event) => {
    event.preventDefault();
    let paraLength = $("#para-length").val();
    let paraQuantity = $("#para-quantity").val();
    getContent(paraQuantity, paraLength);
  });



















// START OF FOUNDATION JAVASCRIPT ===========================================================================================
$('[data-menu-underline-from-center] a').addClass('underline-from-center');


});
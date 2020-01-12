
$(document).ready(() => {

const getContent = function (paraQuantity, paraLength) {
  let queryString = "/api/ipsum/";
  queryString += paraQuantity;
  queryString += "/";
  queryString += paraLength;
  $.get(queryString, function(data) {
    let ipsum='';
      data.forEach((line)=> {
        ipsum += line.quote + " ";
      });
  $("#publish-ipsum").text(ipsum);
  });
}


// START OF CLICK EVENTS ----------------------------------------------------------
  $('#ipsum-create').on('click', (event) => {
    event.preventDefault();
    let paraLength = $("#para-length").val();
    let paraQuantity = $("#para-quantity").val();
    getContent(paraQuantity, paraLength);
/*
   $.get("/api/ipsum", function(data) {
      let ipsum=''
        data.forEach((line)=> {
          ipsum += line.quote + " ";
        })
    $("#publish-ipsum").val(ipsum);
    });
*/
  });

// START OF FOUNDATION JAVASCRIPT ===========================================================================================
$("[data-menu-underline-from-center] a").addClass("underline-from-center");
});
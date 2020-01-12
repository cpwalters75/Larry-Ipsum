
$(document).ready(() => {

const getContent = function (conditions) {
  $.get("/api/ipsum", function(data) {
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
    let conditions = {
      paraLength : $("#para-length").val(),
      paraQuantity : $("#para-quantity").val()
    }
    getContent(conditions);
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
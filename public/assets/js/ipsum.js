
$(document).ready(() => {


  $('#ipsumCreate').on('click', (event) => {

    event.preventDefault();

    $.get("/api/ipsum", function(data) {
        console.log("clicked")
        console.log(data)
        
        
    });
  });
  $("[data-menu-underline-from-center] a").addClass("underline-from-center");
});
// START OF FOUNDATION JAVASCRIPT ===========================================================================================



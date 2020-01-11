
$(document).ready(() => {
<<<<<<< HEAD


  $('#ipsumCreate').on('click', (event) => {
=======
 $('#ipsumCreate').on('click', (event) => {
>>>>>>> 782bf5f229f91f9f76ee590181ce94a1081e9c31
    event.preventDefault();

    $.get("/api/ipsum", function(data) {
        console.log("clicked")
        console.log(data)
        
        
    });
  });

});
// START OF FOUNDATION JAVASCRIPT ===========================================================================================
$("[data-menu-underline-from-center] a").addClass("underline-from-center");


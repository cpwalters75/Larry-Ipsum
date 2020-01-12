
$(document).ready(() => {


  $('#ipsum-create').on('click', (event) => {

    event.preventDefault();

    $.get("/api/ipsum", function(data) {
      let ipsum=''
        data.forEach((line)=> {
          ipsum += line.quote + " ";
        })
        console.log(ipsum);
    });
  });
 
// START OF FOUNDATION JAVASCRIPT ===========================================================================================
$("[data-menu-underline-from-center] a").addClass("underline-from-center");
});
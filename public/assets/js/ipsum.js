
$(document).ready(() => {


  $('#ipsumCreate').on('click', (event) => {
    event.preventDefault();

    $.get("/api/ipsum", function(data) {
        console.log("clicked")
        console.log(data)
        
        
    });
  });

});

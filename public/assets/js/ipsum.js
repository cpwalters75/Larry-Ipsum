
$(document).ready(() => {

const getContent = function (paraQuantity, paraLength) {
  let queryString = "/api/ipsum/";
  queryString += paraQuantity;
  queryString += "/";
  queryString += paraLength;
  console.log(queryString);
  $.get(queryString, function(data) {
    console.log(data);
     // data.forEach((line)=> {
       // ipsum += line.quote + " ";
      //});
  $("#publish-ipsum").text("hurray");
  
  })
};



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

  // below is for creating new Larrys, I can't seem to get the value from #newLarry
   const larryText = $('#new-larry').val().trim();
   const larryEntry = $('#new-larry').val().trim() + 'so, call it Larry.';

   function newLarry(event) {
    event.preventDefault();
    const larry = {
       quote: larryEntry,
    };
    
    $.post('/api/ipsum', larry);
   }

   $('#larry-create').on('click', newLarry);


// START OF FOUNDATION JAVASCRIPT ===========================================================================================
$('[data-menu-underline-from-center] a').addClass('underline-from-center');


});
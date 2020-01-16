const axios = require('axios');

const larryTimeline = function () {
  // make an axios call to GET /api/activities
  axios.get('/api/hall_of_larries')
    .then((response) => {
      console.log(response);
      // loop over each activity
      // response.data.forEach((activity) => {
      //     // render the activity to the table as a <tr>
      //     console.log(activity);
      //     $table.append(`<tr><td>${activity.name}</td><td>${activity.measurement}</td><td>${activity.unit}</td><td><button data-id="${activity.id}" class="btn btn-danger delete-button">Delete</button></td></tr>`);
    });
  // axios.post("/api/activities", activity)
  // .then((response) => {
  //     window.location = "/activities";
  // });
};

axios.get('/api/hall_of_larries')
  .then((response) => {
    const larries = response.data;
    larries.forEach((larry, index) => {
      let classString = '';
      if (index % 2) {
        classString = 'right';
      }
      const date = new Date(larry.larry_birthdate).getFullYear();
      console.log(date);
      console.log(larry.image);
      const timeline = `
    <div class="timeline-item">

      <div class="timeline-icon" id="larry-time" style="background-image: url(${larry.image}); background-size:100% 100%">
      
        
      </div>
      <div class="timeline-content larryfont ${classString}">
        <p class="timeline-content-date larryfont" >${date}</h2>
        <p class = "larryfont">${larry.name}</p>
        <p class= "larryfont">${larry.description}</p>
      </div>
    </div>`;

      $('.timeline').append(timeline);
    });
  });

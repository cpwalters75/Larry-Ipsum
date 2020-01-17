

// AJAX call to API to get data
const larries = [];

larries.forEach((larry, index) => {

    const timeline = `
    <div class="timeline-item">
      <div class="timeline-icon" id="larry-time">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd"><path d="M9 21h-9v-2h9v2zm6.695-2.88l-3.314-3.13-1.381 1.47 4.699 4.54 8.301-8.441-1.384-1.439-6.921 7zm-6.695-1.144h-9v-2h9v2zm8-3.976h-17v-2h17v2zm7-4h-24v-2h24v2zm0-4h-24v-2h24v2z"/></svg>
      </div>
      <div class="timeline-content">
        <p class="timeline-content-date">${larry.larry_birthdate}</h2>
        <p>${larry.name}</p>
        <p>${larry.description}</p>
      </div>
    </div>`;

    $('.timeline').append(timeline);

});

$(document).ready(function () {
  //write your code here
  $.getJSON('data.json', function (data) {

    let table = document.getElementById('table');

    data.forEach(dataset => {
    //create new row elements
      let newRow = table.insertRow();
      //create new columns elements
      let newName = newRow.insertCell();
      let newDescription = newRow.insertCell();
      let newLocation = newRow.insertCell();

      let latitude = dataset.location[0];
      let longitude = dataset.location[1];
      let link = `https://www.google.com/maps?q=${latitude},${longitude}`

      newName.innerHTML = `${dataset.name}`
      newDescription.innerHTML = `${dataset.description}`
      newLocation.innerHTML = `<a href="${link}" target="_blank"><button>Open in Google Maps</button></a>`;

    });
  })
});

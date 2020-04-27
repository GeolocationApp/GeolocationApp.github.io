function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    var service_id = "gmail";
    var template_id = "location";
    //Email.js code, Its not working anymore i think my membership expired or something. But definitly
    //check it out. They have decent documentation too. 
    emailjs.send(service_id, template_id, {
        name: "website",
        message: "Latitude: " + position.coords.latitude +
        "Longitude:"  + position.coords.longitude
    });
    console.log(position); 
}



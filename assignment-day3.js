// For the given JSON iterate over all for loops (for, for in, for of, forEach)
// =============================================================

// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {
  // Process our return data
  if (xhr.status >= 200 && xhr.status < 300) {
    // Runs when the request is successful
    var t = JSON.parse(this.response);
    console.log(t);
  } else {
    // Runs when it's not
    console.log(xhr.responseText);
  }
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.send();


// Create your own resume data in JSON format
// =============================================================
let resume = {
    "basicDetails": {
        "name": "Eunice Dhivya",
        "email": "diviseed@email.com",
        "address": {
          "postalCode": "600049",
          "city": "Chennai",
          "state": "Tamil Nadu",
          "country": "India"
        },
    },
    "education": [
        {"school": "NAFA", "graduatedin": "2013"},
        {"school": "WCC", "graduatedin": "2008"},
        {"school": "JM Matric", "graduatedin": "2005"}
    ],
    "skills": {
        "graphicdesign": ["photoshop", "illustrator"],
        "webdesign": ["HTML", "CSS", "JavaScript", "D3js"]
    },
    "workExperience": [
        {"designation": "Senior Designer", "company": "The Federal", "years": "2019-Present"},
        {"designation": "Designer", "company": "The Hindu", "years": "2014-2019"},
        {"designation": "Designer", "company": "Rillusion", "years": "2013-2014"}
    ]
};

// Read about the difference between window, screen and document in javascript
// =============================================================

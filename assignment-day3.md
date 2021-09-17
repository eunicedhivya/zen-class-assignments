# Day 3 - Assignment

### For the given JSON iterate over all for loops (for, for in, for of, forEach)

<hr>

### Create your own resume data in JSON format

```
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

```

<hr>

### Read about the difference between window, screen and document in javascript

Window: its the root of webpage containing the document structure. Its a global variable. eg., A Tab in the Browser

Document: Contains the DOM structure. Its found inside the Window

Screen: Holds information about the browser screen eg., display screen width, height, colorDepth, pixelDepth

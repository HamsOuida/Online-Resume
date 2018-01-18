var bio = {
    "name": "Hams Ouida",
    "role": "Web Developer",
    "contacts": {
        "mobile": "555-432-6666",
        "email": "hamsouida202@gmail.com",
        "github": "hamsouida",
        "twitter": "hamsouida",
        "location": "Egypt"
    },
    "welcomeMessage": "hi everyone!",
    "skills": 
        ["awesomeness", "kind", "work hard","cryogenic sleep","team working"],
    "biopic": "images/fry.jpg"
};

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedmobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedemail);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedtwitter);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedgithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    var formattedwelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomemsg);
    var formattedbiopc = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbiopc);
    $("#header").append(HTMLskillsStart);
    for(var f= 0 ; f < bio.skills.length ; f++){
      var fomattedSkill = HTMLskills.replace("%data%", bio.skills[f]);
      $("#skills").append(fomattedSkill);

    }
    $("#footerContacts").append(formattedmobile);
    $("#footerContacts").append(formattedemail);
    $("#footerContacts").append(formattedtwitter);
    $("#footerContacts").append(formattedgithub);
    $("#footerContacts").append(formattedLocation);

};

var work = {
    "jobs": [
      {
            "employer": "planet express",
            "title": "delevery Boy",
            "location": "Brooklyn,NY",
            "dates": "January 2000-Future",
            "description": "Who Moved my cheese chessy feet cauliflower cheese."
        },
        {
            "employer": "Panucci's Pizza",
            "title": "delevery Boy",
            "location": "Manhatten, NY",
            "dates": "1998-December 31,1999",
            "description": "Who Moved my cheese chessy feet cauliflower cheese."
        }
    ]
};


work.display = function() {
    for (var q= 0; q < work.jobs.length; q++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[q].employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[q].title);
        var formattedEmployerTitle = formattedEmployer + formattedworkTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[q].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[q].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[q].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

var projects = {
    "projects": [
      {
        "title": "sample project 1",
        "dates": "2017",
        "description": "Who Moved my cheese chessy feet cauliflower cheese.",
        "images": [
            "images/1.gif","images/1.gif"
        ]
    }
  ]
};
projects.display = function() {
    for (var w= 0; w < projects.projects.length; w++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[w].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[w].dates);
        $(".project-entry:last").append(formattedDate);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[w].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[w].images.length > 0) {
            for (var g = 0; g < projects.projects[w].images.length; g++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[w].images[g]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

var education = {
    "schools": [
      {
            "name": "Nova",
            "location": "Southeastern University",
            "degree": "Masters",
            "majors": ["CS"],
            "dates": "2013",
            "url": "http://google.com"
      },
        {
            "name": "Eckerd College",
            "location": "Manhatten",
            "degree": "BA",
            "majors": ["CS"],
            "dates": "2003",
            "url": "http://yahoo.com"
        }
    ],

    "onlineCourses": [
      {
        "title": "JavaScript Crash Course",
        "school": "Udacity",
        "dates": "2014",
        "url": "http://www.udacity.com/course/ud804"
      }
    ]
};



education.display = function() {
    for (var x = 0; x < education.schools.length; x++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[x].name);
      //  $(".education-entry:last").append(formattedName);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[x].location);
      //  $(".education-entry:last").append(formattedLocation);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[x].degree);
       // $(".education-entry:last").append(formattedDegree);
        //$(".education-entry:last").append(formattedName + formattedDegree+ formattedLocation + formattedMajor+formattedDates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[x].majors);
        //$(".education-entry:last").append(formattedMajor);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[x].dates);
       // $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLschoolUrl.replace("%data%", education.schools[x].url);
       // $(".education-entry:last").append(formattedURL);
        $(".education-entry:last").append(formattedName + formattedLocation + formattedDegree+ formattedDates + formattedMajor);
       
    }

    for (var i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        $(".education-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedSchool);
        var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedDate);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedUrl);
    }
};




bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
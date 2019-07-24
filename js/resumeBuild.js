 //just a bit of information about me
 var bio = {
  "name" : "John Silvas ",
  "age" : "26",
  "contact" :"mobile 754-610-1990",
  "welcomeMessage" : " I have adept computer skills in both hardware and software, excellent teamwork and communication skills. I am a very eager individual constantly seeking to better my skills and learn more. Freelance programming is a pastime I have picked up over the last few years and I am looking to further my education in the IT field through both school and work.",
  "skills" : [
  "Excellent teamwork and interpersonal skills", "Computer  support experience including POS, word, office, excel and others", "Computer programming experience in Java, JavaScript, HTML5, with a multitude of applications including BlueJ, Sublime 3, IntelliJ,Atom(my personal favorite), and of course the browsers amazing developer tools of Chrome and Edge(microsoft)", "Jack of all Trades. If theres a will and a way, I am keen to figure it out and take the task on myself. From automotive repair to Home surveillance, to various Raspberry pi ventures. I like to be resourseful and take pride as a go-to guy for my friends and colleagues alike. However, do not let this be taken as an arrogant outlook. I am very open to constuctive criticism and letting others explain their thoughts."
],
  "bioPic" : "images/xbox_square.png"
};
//list of work history
var work = {
  "jobs":[{
	"position": "Clover Tech Support ",
	"employer": "First Data Corp",
	"years": 1.7,
	"description": "With Clover support(a point of sale, cloud based terminal),Taking inbound calls helping businesses with the Clover system, making outbound calls when scheduled or necessary.  constantly keeping up to date with the latest in processing technology and up to date on procedures, both Global and local. Keeping myself updated on the latest information to be able to help the callers understand the product to help ensure smooth operation."
}, {
	"position": "Xbox Agent",
	"employer": "Teleperformance",
	"years": 1.7,
	"description": "My first experience on the phone, helping customers with primarily networking but in all aspects of Microsoft services connected to Xbox and some outside. Durring this time I developed many useful techniques for technical support and keeping up to date with the latest technology for the company."
}, {
	"position": "Assistant Manager",
	"employer": "Burger King franchise",
	"years": "6 months",
	"description": "As an assistant manager I had gained more knowledge in the fast food business and further sharpened my leadership skills and team building skills."
}, {
	"position": "Shift Manager",
	"employer": "McDonald's franchise",
	"years": 1,
	"description": "As a shift manage, my responsibilities included taking care of the entire store and running the shift to make the most enjoyable experience for the customers while keeping it profitable  for the company."
}, {
	"position": "Lead Stocker",
	"employer": "WalMart",
	"years": 3,
	"description": "As lead Stocker I was in charge of training new associates as well as execute crucial task in a timely manner to ensure meeting goals set forth by direct supervisors and company standards."
}]}
//schooling list
var education = {
  "schools": [
  	{ "name": "LoneStar College-Tomball",
  		"datesAttended": "2006-2008",
  		"location": "Tomball, Texas",
  		"degree": "Business Administration",
  		"major": "Management information systems",
  		"minor": "Computer Science",
  		"url": "http://www.lonestar.edu/tomball"
  	}
  ],
  "onlineCourses": [
  {"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}, {
		"title": "Intro to Java Programming",
		"school": "Udacity",
		"url": "https://www.udacity.com/course/intro-to-java-programming--cs046"
	}, {
		"title": "Java Programming Basics",
		"school": "Udacity",
		"url": "https://www.udacity.com/course/java-programming-basics--ud282"
	}, {
		"title": "Android Development for Beginners",
		"school": "Udacity",
		"url": "https://www.udacity.com/course/android-development-for-beginners--ud837"
	}, {
		"title": "Intro to JavaScript",
		"school": "Codecademy",
		"url": "https://www.codecademy.com/learn/javascript"
	}]

};

//name display
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

//profile image
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").prepend(formattedBioPic);

//putting the skills to the page, the repeat code is for educational/ demonstrative purposes.
if(bio.skills.length >0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
};

// this For loop is just from educational purposes
function displayWork() {

  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle)

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  };
};

displayWork();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}
		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
}

education.display();

//just a demonstrative show of clickLocation logging
$(document).click(function(loc) {
var x = loc.pageX;
var y = loc.pageY;

  logClicks(x,y);
});

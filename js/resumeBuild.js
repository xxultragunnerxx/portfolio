 //just a bit of information about me
 const bio = {
  "name" : "John Silvas ",
  "phone" :"754-610-1990",
  "email" : "Juan.Silvas@live.com",
  "mailingAddress":'3649 Jackson rd Montgomery, Tx 77316',
  "homeAddress":'5050 nw 57th ter Coral Springs, Fl 33067',
  "welcomeMessage" : "Aspiring Web Developer in the SoFlo Area",
  "skills" : [
  'Microsoft office suite proficiant','Html5, CSS3,JavaScript and many library and frameworks','Atom, Google Dev tools, Google Canary, Visual Studio, Android Studio, GitHub, Gitbash ','Many more...'
],
  "bioPic" : "images/xbox_square.png"
};
//name display
const formattedName = `<h1 id="name">${bio.name}</h1>`;
$("#header").append(formattedName);

//quick intro
const intro = `<p>${bio.welcomeMessage}</p>`;
$("#header").append(intro);
//contact info
const contactInfo = `<ul>
<li>${bio.phone}</li>
<li>${bio.email}</li>
<li>${bio.mailingAddress}</li>
<li>${bio.homeAddress}</li>
</ul>`;
$("#contactInfo").append(contactInfo);

let projectItem1 = `<div><img src="images/controller6.png" class="project" alt="project one"><span>information about the project</span></div>`;
let projectItem2 = `<div><img src="images/controller6.png" class="project" alt="project two"><span>information about the project</span></div>`;

$("#projects").append(projectItem1,projectItem2);
const githubLink = `<a>https://github.com/xxultragunnerxx/</a>`;
$("#projects").append(githubLink);

//profile image
const formattedBioPic = `<img src= ${bio.bioPic} class="biopic">`;
$("#header").prepend(formattedBioPic);

//putting the skills to the page, the repeat code is for educational/ demonstrative purposes.
if(bio.skills.length >0) {

  $("#skills").append(HTMLskillsStart);

  let formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
};

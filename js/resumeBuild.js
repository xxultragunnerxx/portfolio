 //just a bit of information about me
 const bio = {
  "name" : "Juan Silvas ",
  "welcomeMessage" : "Aspiring Web Developer in the SoFlo Area",
  "bioPic" : "images/xbox_square.png"
};
//name display
const formattedName = `<h1 id="name">${bio.name}</h1>`;
$("#header").append(formattedName);

//quick intro
const intro = `<p>${bio.welcomeMessage}</p>`;
$("#header").append(intro);

const githubLink = `<a>https://github.com/xxultragunnerxx/</a>`;
$("#projects").append(githubLink);

//profile image
const formattedBioPic = `<img src= ${bio.bioPic} class="biopic">`;
$("#header").prepend(formattedBioPic);

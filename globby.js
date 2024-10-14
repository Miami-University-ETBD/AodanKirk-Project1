
// Creates a navagator for all of the main webpages on the cite
let nav = document.querySelector("nav")
nav.innerHTML = `
    <a href="index.html">Home</a>
    <a href="IDkWCTshow.html">IDkWCT show</a>
    <a href="MnM.html">Monsters and Mercinaries</a>
    <a href="goon.html">Goon War</a>
    <a href="TTRPG.html">Untitled TTRPG</a>
    <a href="Venture.html">Venture</a>
    <a href="StellaOctangula.html">Project: Stella Octangula</a>
    <a href="projects.html">Other Projects</a>
    <a href="Art.html">Art</a>
`
// Places an image of Globulus after pressing a button on the secret page after popping up an alert
function Globulus() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "Images/Globulus.png");
    x.setAttribute("width", "100");
    x.setAttribute("height", "150");
    x.setAttribute("alt", "Globulus");
    document.body.appendChild(x);
    alert("a Globulus has been made");
  }

  // Hyperlink that leads to a secret page
  let text = "_";
  let result = text.link("Secret.html");
  document.getElementById("sshh").innerHTML = result;


// Write your code below:
const  heading = document.createElement("h3");

const headingText = document.createTextNode("Buy high quality organic fruits online");

heading.appendChild(headingText);

const divs = document.getElementsByTagName("div");

divs[0].appendChild(heading);

heading.style.fontStyle='italic';

const subhead = document.createElement("p");
const subheadText = document.createTextNode("Total fruits: 4");
subhead.appendChild(subheadText);

const divs2 = document.getElementsByTagName("div")
divs[1].appendChild(subhead);

subhead.id="fruits-total"
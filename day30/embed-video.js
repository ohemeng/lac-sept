(function(){
console.log("It's on");

const thevideo = "https://www.youtube.com/embed/swdWUWtGxR4";

const mydiv = document.createElement('div');
const myvideo = `<iframe width="560" height="315" src=${thevideo} frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>`;

mydiv.classList.add('container');

mydiv.innerHTML = myvideo;

// document.body.appendChild(mydiv);
const myH1 = document.querySelector("h1");
myH1.style.color = "red";

// mydiv.style.width = "560px";
// mydiv.style.height = "315px";
// mydiv.style.border = "20px groove brown";

document.body.insertBefore(mydiv, myH1);

})();
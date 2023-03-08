// ---------------------------- scroll to top button ------------------------------------

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// dark / light mode

function lightMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

const sel = document.getElementById("btn-light-mode");
sel.addEventListener("click", lightMode);

// swing the contact button

const swingBtn = document.getElementById("swing");

function mouseOver() {
  swingBtn.setAttribute("class", "btn btn-lg btn-secondary text-warning mt-4 mt-sm-0 animate__animated animate__swing");
}

swingBtn.addEventListener("mouseover", mouseOver);

function mouseOut() {
  swingBtn.setAttribute("class", "btn btn-lg btn-secondary text-warning mt-4 mt-sm-0");
}

swingBtn.addEventListener("mouseout", mouseOut);
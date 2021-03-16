let x = document.getElementsByClassName("slider-image");
let dots = document.getElementsByClassName("dots");

let slideIndex = 1;
let myIndex = 0;
carousel();

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " white";
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("slider-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" white", "");
  }

  myIndex++;
  
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block"; 
  dots[myIndex-1].className += " white";
  setTimeout(carousel, 5000); // Change image every 2 seconds
  
}


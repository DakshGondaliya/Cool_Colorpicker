// When the user scrolls down 30px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 60 ||
    document.documentElement.scrollTop > 60
  ) {
    document.getElementById("navbar").style.padding = "10px 5px";
    document.getElementById("logo").style.fontSize = "30px";
  } else {
    document.getElementById("navbar").style.padding = "20px 5px";
    document.getElementById("logo").style.fontSize = "40px";
  }
}
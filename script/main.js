// When the user scrolls down 30px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
  growShrinkLogo();
  scrollFunction();
  scrollindicator();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.padding = "0 2px";
    // document.getElementById("logo").style.fontSize = "30px";
  } else {
    document.getElementById("navbar").style.padding = "0 2px";
    // document.getElementById("specialmargin").style.margin = "100px 0 0 0";
    // document.getElementById("logo").style.fontSize = "40px";
  }
}

function growShrinkLogo() {
  var Logo = document.getElementById("logo");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    Logo.style.width = "200px";
  } else {
    Logo.style.width = "250px";
  }
}

function scrollindicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

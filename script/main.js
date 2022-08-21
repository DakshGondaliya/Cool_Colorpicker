// When the user scrolls down 30px from the top of the document, resize the header's padding and the logo's font size
window.onscroll = function () {
  growShrinkLogo();
  scrollFunction();
  scrollindicator();
};

function scrollFunction() {
  document.getElementById("header").style.padding = "0 2px";
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

var clipboard = new ClipboardJS('.item');

clipboard.on('success', function (e) {
  e.clearSelection();
  e.trigger.textContent = 'Copied🙂';
  e.trigger.style = 'font-size: 2rem';
  var interval = setInterval(timer, 2000);

  function timer() {
    e.trigger.textContent = e.text;
    clearInterval(interval);
  }
});

clipboard.on('error', function (e) {
  console.info(e);
});

const year = new Date().getFullYear()
document.querySelector('.copyrights-text').textContent = `${year} by Cool_Colorpicker. All rights reserved.`
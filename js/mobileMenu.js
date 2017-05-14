(function showMenu() {
  var mobileButton = document.getElementById("mobileButton");
  var html = document.getElementsByTagName("html");

  mobileButton.onclick = function() {
    if (html[0].classList.contains("expanded")) {
      html[0].classList.remove("expanded");
      // console.log("html contained expanded, and it was removed");
    } else {
      html[0].classList.add("expanded");
      // console.log("html did NOT contain expanded, and it was added");
    }
  }

  var rofl = mobileButton.getBoundingClientRect();
  console.log(rofl);
})();

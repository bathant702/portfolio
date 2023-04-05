// Scroll button
const scrollBtnHome = document.getElementById("scroll-top-btn-home");
scrollBtnHome.addEventListener("click", scrollToTop);
// scroll functions
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Scroll button
const scrollBtnDown = document.getElementById("scroll-top-btn-down");
scrollBtnDown.addEventListener("click", scrollToTop);
// scroll functions
function scrollToTop() {
  window.scrollTo({
    top: -100,
    behavior: "smooth",
  });
}


// Dropdown menu
//make variable of the IDs you need to grab
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
//shows menu via classlist show
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};
//event listener to reveal dropdown menu when clicked,
dropdownBtn.addEventListener("click", function (evt) {
  toggleDropdown();
});
//event listener for when clicking on a link, it opens another window and closes the dropdown menu
const linksArray = document.querySelectorAll("#dropdownMenu a");
linksArray.forEach((singleLink) => {
  singleLink.addEventListener("click", function (evt) {
    toggleDropdown();
  });
});

//Links mouseover
document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("demo").style.color = "red";
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
}

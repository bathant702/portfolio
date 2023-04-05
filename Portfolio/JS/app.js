
// Scroll button home
const scrollBtnHome = document.getElementById("scroll-top-btn-home");
scrollBtnHome.addEventListener("click", scrollToTop);
// scroll functions
function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Scroll button Down
const scrollBtnDown = document.getElementById("scroll-top-btn-down");

scrollBtnDown.addEventListener("click", function () {
  // #bio
  // #resume
  // #resources
  const bioSection = document.getElementById("bio");
  const resumeSection = document.getElementById("resume");
  const resourcesSection = document.getElementById("resources");

  if (window.scrollY < bioSection.offsetTop) {
    //scroll to bio section if not visible
    window.scrollTo({
      top: bioSection.offsetTop,
      behavior: "smooth",
    });
  } else if (window.scrollY < resumeSection.offsetTop) {
    //scroll to next section
    window.scrollTo({
      top: resumeSection.offsetTop,
      behavior: "smooth",
    });
  } else {
    //scroll to next section
    window.scrollTo({
      top: resourcesSection.offsetTop,
      behavior: "smooth",
    });
  }
});

// Dropdown menu -- changing. will be doing an overlay menu
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
document.getElementById("project-link-1").addEventListener("mouseover", mouseOver);
document.getElementById("project-link-2").addEventListener("mouseover", mouseOver);
document.getElementById("project-link-3").addEventListener("mouseover", mouseOver);
// document.getElementById("project-link-1").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("project-link-1").style.color = "red";
  document.getElementById("project-link-2").style.color = "green";
  document.getElementById("project-link-3").style.color = "yellow";
}

// current mouse over is working as intended, but its also firing them all at once and is not smooth by and degree. will look into this further tomorrow


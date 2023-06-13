


// Overlay Controls
const overlayMenuOpen = document.getElementById("overlay-menu");
const overlayMenuClose = document.getElementById("closeOverlay");
const overlayBioClose = document.getElementById("menu-link1");
const overlayResumeClose = document.getElementById("menu-link2");
const overlayResourceClose = document.getElementById("menu-link3");

//Open Menu
overlayMenuOpen.addEventListener("click", function openMenu(){
  document.getElementById("myOverlay").style.width ="100%";
});
//Close Menu
overlayMenuClose.addEventListener("click", function closeMenu(){
  document.getElementById("myOverlay").style.width="0%";
});
//Close Bio
overlayBioClose.addEventListener("click", function closeBioLink(){
  document.getElementById("myOverlay").style.width="0%";
});
//Close Resume
overlayResumeClose.addEventListener("click", function closeResumeLink(){
  document.getElementById("myOverlay").style.width="0%";
});
//Close Resources
overlayResourceClose.addEventListener("click", function closeResourceLink(){
  document.getElementById("myOverlay").style.width="0%";
});


// Scroll button home
const scrollBtnHome = document.getElementById("scroll-btn-home");
scrollBtnHome.addEventListener("click", scrollToTop);
// scroll functions
function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Scroll button Down
const scrollBtnDown = document.getElementById("scroll-btn-down");
scrollBtnDown.addEventListener("click", function (){
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


//light mode toggle
const colorToggle = document.getElementById("view-mode-toggle");

colorToggle.addEventListener("click", function lightSwitch(){
  console.log("Click");
  document.body.classList.toggle("light-mode");
});


// //Links mouseover
// document.getElementById("project-link-1").addEventListener("mouseover", mouseOver);
// document.getElementById("project-link-2").addEventListener("mouseover", mouseOver);
// document.getElementById("project-link-3").addEventListener("mouseover", mouseOver);
// // document.getElementById("project-link-1").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//   document.getElementById("project-link-1").style.color = "red";
//   document.getElementById("project-link-2").style.color = "green";
//   document.getElementById("project-link-3").style.color = "yellow";
// }

// current mouse over is working as intended, but its also firing them all at once and is not smooth by and degree. will look into this further tomorrow
//NOTE: attempt later. deadline is coming and this must be finished
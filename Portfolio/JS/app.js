
// Scroll button 
const scrollTopBtn = document.getElementById("scroll-top-btn");
scrollTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

// Dropdown menu
//make variable of the IDs you need to grab
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

//shows menu via classlist show
const toggleDropdown = function(){
  dropdownMenu.classList.toggle("show")
}

//event listener to reveal dropdown menu when clicked, 
dropdownBtn.addEventListener("click", function(evt){
  toggleDropdown();
});

//event listener for when clicking on a link, it opens another window and closes the dropdown menu
const linksArray = document.querySelectorAll("#dropdownMenu a");
  linksArray.forEach(singleLink=>{
    singleLink.addEventListener("click", function(evt){
      toggleDropdown();
    })
  })
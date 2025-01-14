// document.addEventListener("DOMContentLoaded", function () {
//     // Get references to the logo, social media icons, and the Services section
//     const logo = document.querySelector(".navbar-logo");
//     const socialIcons = document.querySelector(".social-icons");
//     const servicesSection = document.getElementById("services");

//     // Listen for the scroll event
//     window.addEventListener("scroll", function () {
//         // Get the vertical scroll position and the offset position of the Services section
//         const servicesOffset = servicesSection.offsetTop;
//         const scrollPosition = window.scrollY;

//         // Check if the scroll position is past the Services section
//         if (scrollPosition >= servicesOffset) {
//             // Hide the logo and show the social media icons when scrolled to Services
//             document.body.classList.add("hide-logo");    // Adds a class to hide the logo
//             document.body.classList.add("show-social-media");  // Adds a class to show the social media icons
//         } else {
//             // Revert to showing the logo and hiding the social media icons when above Services
//             document.body.classList.remove("hide-logo");   // Removes the class that hides the logo
//             document.body.classList.remove("show-social-media");  // Removes the class that shows social media icons
//         }
//     });
// });

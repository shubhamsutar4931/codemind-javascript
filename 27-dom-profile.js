const TechnologyElement=document.querySelector("#Technology");
TechnologyElement.style.color = "red";
TechnologyElement.style.fontFamily = "Arial";

const ProfileElement=document.querySelector("#Profile");
ProfileElement.style.color="Orange";

// Select the element you want to remove
var elementToRemove = document.getElementById("#agile");

// Get its parent element
var parentElement = elementToRemove.parentNode;

// Remove the element
parentElement.removeChild(elementToRemove);

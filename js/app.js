// variables
const courses = document.querySelector('#courses-list');





// Listeners
 loadEventListener();
 function loadEventListener() {
     courses.addEventListener(click, buyCourses);
 }




// Function
function buyCourses(event) {
    console.log('course added');
    
}
// variables
const courses = document.querySelector('#courses-list');





// Listeners
 loadEventListener();
 function loadEventListener() {
     courses.addEventListener('click', buyCourses);
 }




// Function
function buyCourses(event) {
    event.preventDefault();
        // use delegation to find the course that was added
    if(event.target.classList.contains = ('add-to-cart')){
     // read the courses value
     const course = event.target.parentElement.parentElement;
     
     //read the value
     getCourseInfo(course);
     
    }
}

function getCourseInfo(course) {
    console.log(course);
    
}
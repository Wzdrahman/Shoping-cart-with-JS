// variables
const courses = document.querySelector('#courses-list'),
shopingCartContent = document.querySelector('#cart-content tbody'),
clearCartBtn = document.querySelector('#clear-cart');






// Listeners
 loadEventListener();
 function loadEventListener() {
     courses.addEventListener('click', buyCourses);

     // when the remove button is clicked
     shopingCartContent.addEventListener('click', removeCourse);

     //clear cart Btn
     clearCartBtn.addEventListener('click', clearCart);

     // Document Ready
     document.addEventListener('DOMContentLoaded', getFromLocalStorage);
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
    // create an obj with course Data
     const courseInfo =  {
         images: course.querySelector('img').src,
         title: course.querySelector('h4').textContent,
         price: course.querySelector('.price span').textContent,
         id: course.querySelector('a').getAttribute('data-id')
     }
     // insert into the shopping cart
     addIntoCart(courseInfo);
}
    // Display the selected course into the shopping cart
    function addIntoCart(course) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <tr>
            <td>
                <img src="${course.images}" width=100 >
            </td>
            <td> ${course.title}</td>
            <td> ${course.price}</td>
            <td> 
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>
            
            </tr>
            

        `;
        shopingCartContent.appendChild(row);

        // add course into storage
        saveIntoStorage(course);
    }

    // add courses into the local storage
    function saveIntoStorage(course) {
        let courses = getCoursesFromStorage();

        // add the course into the array
        courses.push(course);

        // since storage only saves strings, we need to convert JSON into string
        localStorage.setItem('courses', JSON.stringify(courses) );
    }
    // get the contents from storage
    function getCoursesFromStorage() {
        let courses;

        // if something exist on storage then we get the value, otherwise create an emty array
        if (localStorage.getItem('courses') === null) {
            courses = [];
        } else{
            courses = JSON.parse(localStorage.getItem('courses'));
        }
        return courses;
    }




    // remove course from the dom
    function removeCourse(event) {
        let course, courseId;
        //remove from the DOM
        if (event.target.classList.contains('remove')) {
            event.target.parentElement.parentElement.remove();
            course = event.target.parentElement.parentElement;
            courseId = course.querySelector('a').getAttribute('data-id');

        }
        // remove from the local storage
        console.log(courseId);

        // remove from local storage
        removeCourseLocalStorage(courseId);
        
    }
    // remove from local storage
    function removeCourseLocalStorage (id) {
        // get the local storage data
        let coursesLS = getCoursesFromStorage();

        // loop throught the array and find the index to remove 
        coursesLS.forEach(function  (courseLS, index) {
            if (courseLS.id === id) {
                    coursesLS.splice(index, 1);
            }
        });
        // add the rest of the array
        localStorage.setItem('courses', JSON.stringify(coursesLS));
    }


    // clears the shoping cart
    function clearCart() {
        // shopingCartContent.innerHTML = '';
        while (shopingCartContent.firstChild) {
            shopingCartContent.removeChild(shopingCartContent.firstChild)
        }
        // clear from local storage
        clearLocalStorage();

    }
    // clear the whole local storage
    function clearLocalStorage() {
        localStorage.clear();
    }

    // load when documedent is ready and print courses into local storage
    function getFromLocalStorage() {
        let coursesLS = getCoursesFromStorage();

        // Loop thought  the courses and print into the cart
        coursesLS.forEach(function(course) {
        // create the <tr>
        const row = document.createElement('tr');

        // Print the Content
        row.innerHTML = `
            <tr>
                <td>
                    <img src="${course.images}" width=100 >
                </td>
                <td> ${course.title}</td>
                <td> ${course.price}</td>
                <td> 
                    <a href="#" class="remove" data-id="${course.id}">X</a>
                </td>
                
                </tr>
        `;
        shopingCartContent.appendChild(row);
        });
    }
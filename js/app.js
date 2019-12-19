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
    }
    // remove course from the dom
    function removeCourse(event) {
        if (event.target.classList.contains('remove')) {
            event.target.parentElement.parentElement.remove();
        }
    }
    // clears the shoping cart
    function clearCart() {
        // shopingCartContent.innerHTML = '';
        while (shopingCartContent.firstChild) {
            shopingCartContent.removeChild(shopingCartContent.firstChild)
        }

    }
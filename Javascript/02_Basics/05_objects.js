const course = {
    coursename : "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course  // object  destructure -> pakdna by ({})

// console.log(courseInstructor);
console.log(instructor);

// API - Apna kam kisi dusre ko dalna hai wahi API hai

// API matlab kuch values backend se aati hai in  JSON FORMAT, earlier XML structure


// {        JSON FORMAT

//     "coursename" : "JS in Hindi",
//     "price" : 999,
//     "courseInstructor" : "Hitesh",
//     "Logged in" : false
// }

/*
    we have to learn how to use fetch methods in JS, and call the url and get the data in response,
    
    and now convert JSON format to objects and value nikal lenge.


    sometimes API are given in Array format , like Array of objects
*/



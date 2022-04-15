//empty object declaration
// let obj = {};
// console.log(obj);

// let objAni = {
//     Name: 'Aniket Yadav',
//     age: 24,
//     phone: 7045640939,
//     lastName: 'Yadav'
// };
// console.log(objAni);

//Nested objects
let capAmerica = {
    Name: 'Steve',
    age: 999,
    Friends: ['Natasha', 'Tony', 'Bruce', 'BlackArrow'],
    
    address: {
        city: "Queens",
        state: "Brooklyn"
    },
    isAvenger: false,
    sayHi: function(){
        console.log("I am saying hiiii!!!");
    }
}
//console.log(capAmerica);

//key access
console.log(capAmerica.Name)
console.log(capAmerica.Friends[0]);
console.log(capAmerica.address.state);
console.log(capAmerica.age);
//console.log(capAmerica.sayHi()); //this alongwith console log statement prints undefined too
capAmerica.sayHi();

//adding a new object
capAmerica.Movies = ['Avenger', 'Civil war', 'EndGame'];
console.log(capAmerica);
//deleting an key 
delete capAmerica.Movies;
console.log(capAmerica);
capAmerica.isAvenger = true;
capAmerica.address.state = 'Newyork';
console.log(capAmerica);

//second method to access the key
console.log(capAmerica.Name);
console.log(capAmerica['Name']);


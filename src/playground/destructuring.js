// const person = {
//     //name:'Damon',
//     Age:26,
//     location:{
//         city:'Melbourne',
//         temp:11
//     }
// };

// const {name:firstName = 'Anonymous',Age} = person;

// console.log(`${firstName} is ${Age}`);

// const{city,temp:temperature}=person.location;
// if (city && temperature){
// console.log(`its ${temperature} in ${city}`);
// }

// const book = {
//     title:'How to retire',
//     author:'Damon Yan',
//     publisher:{
//        // name:'Penguin'
//     }
// }

// const {name:publisherName = 'Self-Publisher'} = book.publisher;
// console.log(publisherName)

const address = ['50 haig street','Melbourne','VIC','3004'];


const [,city,state] = address;


console.log (`you are in ${city} ${state}`);

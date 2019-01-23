import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD2W93u3FVN60c4rp1d_xxPSh-gKI1XKMA",
  authDomain: "expensify-app-a450d.firebaseapp.com",
  databaseURL: "https://expensify-app-a450d.firebaseio.com",
  projectId: "expensify-app-a450d",
  storageBucket: "expensify-app-a450d.appspot.com",
  messagingSenderId: "821207902565"
  };

firebase.initializeApp(config);

const database=firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase,googleAuthProvider,database as default};

// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// })


// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// })
// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// })

// database.ref('expenses').once('value')
// .then((snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// })

// database.ref('expenses').push({
//     description:'coke',
//     note:'1 can',
//     amout:2,
//     createdAt:2019
// })

// database.ref('expenses').push({
//     description:'car',
//     note:'1',
//     amout:2000,
//     createdAt:2018
// })

// database.ref('expenses').push({
//     description:'jugg',
//     note:'dota2',
//     amout:4,
//     createdAt:2019
// })


// database.ref().on('value',(snapshot)=>{
//     var val = snapshot.val();
// });


// database.ref('location/city').once('value')
// .then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e)=>{
//     console.log('Error fetching data',e)
// })

// database.ref().set({
//     name:'Andrew Mead',
//     age:26,
//     stressLevel:6,
//     job:{
//         title:'front end developer',
//         company:'Google'
//     },
//     location:{
//         city:'melbourne',
//         country:'Australia'
//     }
// }).then(()=>{
//     console.log('Data is saved')
// }).catch((e)=>{
//     console.log('this failed',e)
// });
// database.ref().update({
//     stressLevel:9,
//     'job/company':'Amazon',
//     'location/city':'Seattle'
//     }).then(()=>{
//             console.log('data has been changed')
//         }).catch((e)=>{
//             console.log('Remove has been denied',e)
//     });
// database.ref().remove().then(()=>{
//     console.log('data has been removed')
// }).catch((e)=>{
//     console.log('Remove has been denied',e)
// });
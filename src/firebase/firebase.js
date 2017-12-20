
import * as firebase from 'firebase';
import { setTimeout } from 'timers';

var config = {
    apiKey: process.env.FIREBASE_ENV_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
firebase.initializeApp(config);

const database = firebase.database();


export { firebase, database as default}

// database.ref('expenses').on('value', (snapshots) => {
//     const expenses = [];
//     snapshots.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })



// database.ref('expenses').once('value')
// .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })


// database.ref('expenses').push({
//     description:'desc 1',
//     note:'note 1',
//     amount: 25
// });


// const changeListener = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.firstName} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(()=>{
//     database.ref('job/title').set('Mobile and web developer');
//     database.ref().off('value',changeListener);
// }, 3000)

// setTimeout(()=>{
//     database.ref('job/title').set('developer super');

// }, 7000)



// database.ref().set({
//     name: 'miladi',
//     firstName: 'Mohamed',
//     location:{
//         country: 'Belgium',
//         city: 'Etterbeek',
//         zip: 1040
//     },
//     isSingle: true,
//     stressLevel:9,
//     job: {
//         title: 'software developer',
//         company: 'Educinvest'
//     }
// })
// .then(() => {
//     console.log('data was saved successfully');
// })
// .catch((error) => {
//     console.log('error when trying to add data ', error)
// })



//database.ref('isSingle').set(false);
//database.ref('location/zip').remove();

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'SUPINFO',
//     'location/city':'Brussels'
// })




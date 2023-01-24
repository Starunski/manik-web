// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {
  getDatabase,
  set,
  ref,
  get,
  onValue,
  onChildRemoved,
} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAipjwORHFUIMethttkHtwoG0b6qlyj4QE",
  authDomain: "manik-2ebf7.firebaseapp.com",
  projectId: "manik-2ebf7",
  storageBucket: "manik-2ebf7.appspot.com",
  messagingSenderId: "216305632483",
  appId: "1:216305632483:web:2af9d77608891ee10df1d6",
  measurementId: "G-QKY9519K47",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export function writeUserData(userId, name, email, address, price) {
  const db = getDatabase(app);
  const reference = ref(db, "users/" + userId);
  set(reference, {
    username: name,
    email: email,
    address: address,
    price: price,
  });
}

// export function readUserData() {
//   const db = getDatabase(app);
//   const reference = ref(db, "users/");
//   get(reference, (error, snapshot) => {
//     console.log("snapshot !!!", snapshot);
//     if (error) {
//       console.error(error);
//     } else if (snapshot.exists()) {
//       console.log(snapshot.val());
//     }
//   });
// }
export function readUserData() {
  const db = getDatabase(app);
  const someRef = ref(db, "users/" + "1" + "/email");
  let data = {};

  onValue(someRef, (snapshot) => {
    data = snapshot.val();

    console.log("'''''''''''", data);
  });
  return JSON.stringify(data);
}

export const onRemoveChild = (userId) => {
  console.log("====================================");
  console.log("userId", userId);
  console.log("====================================");
  const db = getDatabase(app);
  const reference = ref(db, "users/" + userId);
  onChildRemoved(reference, (data) => {
    console.log("data", data.val());
  }) 
};

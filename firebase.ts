import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore, Firestore, collection, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ4VeTT1rtuvBZeRiK4wcIKAsidn6tWIQ",
  authDomain: "kookkuu-b212e.firebaseapp.com",
  projectId: "kookkuu-b212e",
  storageBucket: "kookkuu-b212e.appspot.com",
  messagingSenderId: "801191711103",
  appId: "1:801191711103:web:68b0504b5f08f9e81eca4a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// เชื่อมต่อกับ Firestore
export const db: Firestore = getFirestore(app);

// // ดึงข้อมูล document จาก collection
// const docRef = doc(collection(db, 'student'), '6512345678');

// getDoc(docRef)
//   .then((docSnap) => {
//     if (!docSnap.exists()) {
//       console.log('ไม่พบเอกสาร!');
//     } else {
//       console.log('ข้อมูลเอกสาร:', docSnap.data());
//     }
//   })
//   .catch((err) => {
//     console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', err);
//   });

// export { app };

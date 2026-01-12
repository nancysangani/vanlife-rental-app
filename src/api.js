import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrGc5flM__zZZZz4v7pS8vB7B4lPA3tF4",
  authDomain: "vanlife-project-5620f.firebaseapp.com",
  projectId: "vanlife-project-5620f",
  storageBucket: "vanlife-project-5620f.firebasestorage.app",
  messagingSenderId: "505534725548",
  appId: "1:505534725548:web:91e37f940efb58200f8e09",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vansCollectionRef = collection(db, "vans");
const usersCollectionRef = collection(db, "user");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getVanDetails(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

// export async function getHostVans(id) {
//   const url = id ? `/api/host/hostvans/${id}` : `/api/host/hostvans`;
//   const res = await fetch(url);

//   if (!res.ok) {
//     throw new Response("Failed to fetch vans", {
//       status: res.status,
//       statusText: res.statusText || "Error fetching host vans",
//     });
//   }

//   const data = await res.json();
//   return data.vans;
// }

export async function getHostVans(hostId = "123") {
  const q = query(vansCollectionRef, where("hostId", "==", hostId));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getHostVanDetails(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

export async function loginUser(creds) {
  try {
    const q = query(
      usersCollectionRef,
      where("email", "==", creds.email),
      where("password", "==", creds.password)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      const error = new Error("No user with those credentials found!");
      error.status = 401;
      error.statusText = "Unauthorized";
      throw error;
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    delete userData.password;

    return {
      user: {
        ...userData,
        id: userDoc.id,
      },
      token: "Enjoy your pizza, here's your tokens.",
    };
  } catch (error) {
    if (error.status === 401) {
      throw error;
    }

    const err = new Error("Login failed");
    err.status = 500;
    err.statusText = "Internal Server Error";
    throw err;
  }
}

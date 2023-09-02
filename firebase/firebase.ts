import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClWyUEGvg5_3G_OsuUGmI69GCy9CeZf1U",
  authDomain: "poketion-bb06d.firebaseapp.com",
  projectId: "poketion-bb06d",
  storageBucket: "poketion-bb06d.appspot.com",
  messagingSenderId: "444718134437",
  appId: "1:444718134437:web:2d6879c87b6418ab78894c",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);

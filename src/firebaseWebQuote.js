import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getApps, getApp } from "firebase/app";

const quoteFirebaseConfig = {
  apiKey: "AIzaSyCFBfUojOwmS0hcpgtCqXK_tmj_Hn1BHPA",
  authDomain: "tamerwebquotes.firebaseapp.com",
  databaseURL: "https://tamerwebquotes-default-rtdb.firebaseio.com",
  projectId: "tamerwebquotes",
  storageBucket: "tamerwebquotes.appspot.com",
  messagingSenderId: "38487393908",
  appId: "1:38487393908:web:5f14dd3289d9f91646b321",
};

const quoteApp = initializeApp(quoteFirebaseConfig, "Secondary");
const quoteDb = getDatabase(quoteApp);

export default quoteDb;

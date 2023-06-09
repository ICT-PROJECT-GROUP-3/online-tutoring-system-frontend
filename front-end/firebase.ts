import { initializeApp, getApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCuNvg5RWG_y2Ax1gLLfaxvW0nwRqgAKhE",
    authDomain: "ots-chat.firebaseapp.com",
    projectId: "ots-chat",
    storageBucket: "ots-chat.appspot.com",
    messagingSenderId: "404161659494",
    appId: "1:404161659494:web:ccacab427f842acd7ca3a7"
};

let app;
if (!getApp()) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}
export const auth: Auth = getAuth(app);

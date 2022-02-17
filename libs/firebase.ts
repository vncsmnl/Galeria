import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB2GAjCbfd_QeGrtSARMWa6VCoH0uKC3Ng",
    authDomain: "galeria-b142e.firebaseapp.com",
    projectId: "galeria-b142e",
    storageBucket: "galeria-b142e.appspot.com",
    messagingSenderId: "240969196695",
    appId: "1:240969196695:web:39138635f4cc34d11fb5d2"
};

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC6ZSyugbh68c1V5OUsaE61fN4DgjJgWNk",
  authDomain: "e-sklep-fea5b.firebaseapp.com",
  projectId: "e-sklep-fea5b",
  storageBucket: "e-sklep-fea5b.firebasestorage.app",
  messagingSenderId: "130778339571",
  appId: "1:130778339571:web:7b6390b5140575aca57f86",
  measurementId: "G-0B25R0GZH3"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        }catch(error){
            console.log('Error while creating the user', error.message);
        }

        return userDocRef;
    }
    
}
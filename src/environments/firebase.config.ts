
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyCvV5UxFB6jijPRUBcM6tlZiRVT5pPj4xM",
    authDomain: "proyecto-angular2-moises.firebaseapp.com",
    databaseURL: "https://proyecto-angular2-moises.firebaseio.com",
    storageBucket: "proyecto-angular2-moises.appspot.com",
    messagingSenderId: "502423078405"

};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config';


export function logar (email,senha){
  signInWithEmailAndPassword(auth,email,senha);
};
export function criar (email,senha){
  createUserWithEmailAndPassword(auth,email,senha);
};
import { getFirestore } from "firebase/firestore";
import { firebaseSoundDiffuser } from "../initializeFirebase";
import {
  templateReadDocFS,
  templateReadColFS,
  templateWriteFS,
  templateUpdateFS,
  templateDeleteFS,
} from "../fireTemplate";

export const soundDiffuserFS = getFirestore(firebaseSoundDiffuser);

export const readDocFS = async (refDoc) =>
  await templateReadDocFS(soundDiffuserFS, refDoc);

export const readColFS = async (refDoc) =>
  await templateReadColFS(soundDiffuserFS, refDoc);

export const writeFS = async (data, refDoc) =>
  await templateWriteFS(soundDiffuserFS, data, refDoc);

export const updateFS = async (data, refDoc) =>
  await templateUpdateFS(soundDiffuserFS, data, refDoc);

export const deleteFS = async (refDoc) =>
  await templateDeleteFS(soundDiffuserFS, refDoc);

import {
  getStorage,
  ref,
  getBlob,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { firebaseSoundDiffuser } from "../initializeFirebase";

export const soundDiffuserStorage = getStorage(firebaseSoundDiffuser);

export const readStorageBlob = async (refArray) => {
  try {
    const refPath = refArray
      .map((ref, i) => (i === 0 ? ref : `/${ref}`))
      .join("");

    const file = await getBlob(ref(soundDiffuserStorage, refPath));

    return file;
  } catch (err) {
    throw err;
  }
};
export const writeStorage = async (file, refArray) => {
  const refPath = refArray
    .map((ref, i) => (i === 0 ? ref : `/${ref}`))
    .join("");
  uploadBytes(ref(soundDiffuserStorage, refPath), file);
};
export const deleteStorage = async (refArray) => {
  const refPath = refArray
    .map((ref, i) => (i === 0 ? ref : `/${ref}`))
    .join("");
  deleteObject(ref(soundDiffuserStorage, refPath));
};

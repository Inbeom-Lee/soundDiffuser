import { ref, child, get, set, update, remove } from "firebase/database";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const joinRef = (refArray) =>
  refArray?.map((ref, i) => (i === 0 ? ref : `/${ref}`)).join("");

const checkData = (data, refArray) => {
  if (data === undefined)
    throw `[firebase]\ndata 값이 undefined 입니다.\n${refArray.join(" > ")}`;
};

const checkRef = (refArray) => {
  if (!refArray) throw "[firebase]\nrefArray 파라미터가 없습니다.";

  const findUndefined = refArray?.every(
    (ref) => ref !== undefined && ref !== null
  );
  if (!findUndefined)
    throw `[firebase]\nrefArray 배열에 빈값이 있습니다.\n${refArray.join(
      " > "
    )}`;
};

//RTDB-------------------------------------------

//DB읽기
export const templateReadDB = async (dbType, refArray) => {
  checkRef(refArray);
  const getRef = joinRef(refArray);
  const getData = await (await get(child(ref(dbType), `${getRef}`))).val();
  return getData;
};

//DB쓰기
export const templateWriteDB = async (dbType, data, refArray) => {
  checkData(data, refArray);
  checkRef(refArray);
  const getRef = joinRef(refArray);
  await set(ref(dbType, `${getRef}`), data);
};

//DB업데이트
export const templateUpdateDB = async (dbType, data, refArray) => {
  checkData(data, refArray);
  checkRef(refArray);
  const getRef = joinRef(refArray);
  await update(ref(dbType, `${getRef}`), data);
};

//DB삭제
export const templateDeleteDB = async (dbType, refArray) => {
  checkRef(refArray);
  const getRef = joinRef(refArray);
  await remove(ref(dbType, `${getRef}`));
};

//FS-------------------------------------------

//FS읽기
export const templateReadDocFS = async (fsType, refDoc) => {
  checkRef(refDoc);
  const getRefDoc = joinRef(refDoc);
  const getData = await getDoc(doc(fsType, getRefDoc));
  const checkExist = getData.exists();
  return checkExist ? getData.data() : undefined;
};
//FS읽기
export const templateReadColFS = async (fsType, refDoc) => {
  checkRef(refDoc);
  const getRefDoc = joinRef(refDoc);
  const getData = await getDocs(collection(fsType, getRefDoc));
  const checkEmpty = getData.empty;
  const getArray = getData.docs.map((doc) => doc.data());
  return checkEmpty ? undefined : getArray;
};

//FS쓰기
export const templateWriteFS = async (fsType, data, refDoc) => {
  checkData(data, refDoc);
  checkRef(refDoc);
  const getRefDoc = joinRef(refDoc);
  await setDoc(doc(fsType, getRefDoc), data);
};

//FS업데이트
export const templateUpdateFS = async (fsType, data, refDoc) => {
  checkData(data, refDoc);
  checkRef(refDoc);
  const getRefDoc = joinRef(refDoc);
  await updateDoc(doc(fsType, getRefDoc), data);
};

//FS삭제
export const templateDeleteFS = async (fsType, refDoc) => {
  checkRef(refDoc);
  const getRefDoc = joinRef(refDoc);
  await deleteDoc(doc(fsType, getRefDoc));
};

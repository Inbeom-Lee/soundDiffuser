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

//FS Document 읽기
export const templateReadDocFS = async (fsType, refDoc) => {
  checkRef(refDoc);
  const getRefDoc = joinRef(refDoc);
  const getData = await getDoc(doc(fsType, getRefDoc));
  const checkExist = getData.exists();
  return checkExist ? getData.data() : undefined;
};
//FS Collection 읽기
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

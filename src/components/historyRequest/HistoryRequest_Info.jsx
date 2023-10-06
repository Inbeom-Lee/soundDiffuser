import React, { useState, useEffect, useMemo } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import { useHistory } from "Contexts";
import { soundDiffuserFS } from "Firebase";
import { objValues, timeSorter_Descending } from "Helpers";
import {
  RequestBase,
  RequestContainer,
  Request_Navigation,
  Request_Background,
} from "../shared/request";
import {
  HistoryRequestInfo_Group,
  HistoryRequestInfo_ButtonHome,
} from "./historyRequest_Info/index";

export const HistoryRequest_Info = ErrorPicker(() => {
  const [requestSize, setRequestSize] = useState();
  const [requestList, setRequestList] = useState();
  const { email } = useHistory();

  const arrayRequest = useMemo(() => {
    const getArray = objValues(requestList);
    const sortArray = timeSorter_Descending(getArray, "timeRequested");

    return sortArray;
  }, [requestList]);

  useEffect(() => {
    const setData = async () => {
      try {
        const refRequest = collection(soundDiffuserFS, "requests");
        const getQuery = query(refRequest, where("email", "==", email));

        const querySnapshot = await getDocs(getQuery);

        querySnapshot.forEach((doc) => {
          setRequestList((prev) => ({
            ...(prev || {}),
            [doc.id]: doc.data(),
          }));
        });
        setRequestSize(querySnapshot.size);
      } catch (err) {
        console.log(err);
      }
    };
    setData();
  }, []);

  const render = (
    <RequestBase>
      <Container>
        <Request_Navigation />
        <Title>내 의뢰내역서</Title>
        {requestSize !== undefined && (
          <>
            {requestSize &&
              arrayRequest?.map((request) => (
                <HistoryRequestInfo_Group
                  key={request.uid}
                  email={email}
                  request={request}
                />
              ))}
            {requestSize === 0 && (
              <GuideText>
                '{email}'로
                <br />
                등록된 의뢰가 없습니다.
              </GuideText>
            )}
            <HistoryRequestInfo_ButtonHome />
          </>
        )}
      </Container>
      <Request_Background />
    </RequestBase>
  );
  return render || null;
}, ["HistoryRequest_Info"]);

const Title = styled.h4`
  margin-top: 57px;
  font-weight: 900;
  text-align: center;
`;
const Container = styled(RequestContainer)`
  padding: 0 24px 50px;
`;
const GuideText = styled.p`
  margin-top: 30px;
  text-align: center;
`;

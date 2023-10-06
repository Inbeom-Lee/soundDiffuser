import React, { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";
import {
  RequestReferencesListSelected_Toggle,
  RequestReferencesListSelected_Group,
} from "./requestReferences_ListSelected/index";

export const RequestReferences_ListSelected = ErrorPicker(
  ({ listReference, setDataRequest }) => {
    const [toggle, setToggle] = useState(false);

    const arrayList = useMemo(
      () => listReference && Object.values(listReference),
      [listReference]
    );
    const lengthList = arrayList?.length || 0;

    const handleDelete = useCallback(
      (videoId) => {
        try {
          const { title } = listReference[videoId]?.snippet || {};

          if (confirm(`'${title}'을 리스트에서 제거하시겠습니까?`)) {
            setDataRequest((prev) => {
              const { [videoId]: _, ...rest } = prev.listReference;

              return { ...prev, listReference: rest };
            });
          }
        } catch (err) {
          console.log(err);
        }
      },
      [listReference]
    );

    const render = (
      <>
        <RequestReferencesListSelected_Toggle
          lengthList={lengthList}
          toggle={toggle}
          setToggle={setToggle}
        />
        <Container $toggle={toggle} $length={lengthList}>
          {arrayList?.map((item, i) => (
            <RequestReferencesListSelected_Group
              key={`selected${i}${item.id.videoId}`}
              item={item}
              handleDelete={handleDelete}
            />
          ))}
        </Container>
      </>
    );
    return render || null;
  },
  ["RequestReferences_ListSelected"]
);

const Container = styled.div`
  height: ${(props) => (props.$toggle ? props.$length * 37 : 0)}px;
  overflow: hidden;
  transition: 0.5s;
`;

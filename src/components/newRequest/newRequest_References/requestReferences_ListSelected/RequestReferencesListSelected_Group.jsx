import React, { useState, useCallback } from "react";
import ErrorPicker from "ErrorPicker";
import { Modals_Base } from "Components";
import {
  ListSelectedGroup_ListItem,
  ListSelectedGroup_ModalDelete,
} from "./requestReferencesListSelected_Group/index";

export const RequestReferencesListSelected_Group = ErrorPicker(
  ({ item, setDataRequest }) => {
    const [showModal, setShowModal] = useState({
      status: false,
      transition: false,
      message: "",
    });
    const { id, snippet } = item;
    const { title } = snippet;
    const { videoId } = id;

    const handleShow = useCallback(
      () => setShowModal((prev) => ({ ...prev, status: true })),
      []
    );

    const handleDelete = useCallback(() => {
      try {
        setDataRequest((prev) => {
          const { [videoId]: _, ...rest } = prev.listReference;

          return { ...prev, listReference: rest };
        });
      } catch (err) {
        console.log(err);
      }
    }, [videoId]);

    const render = (
      <>
        <ListSelectedGroup_ListItem title={title} handleShow={handleShow} />
        <Modals_Base showModal={showModal} setShowModal={setShowModal}>
          <ListSelectedGroup_ModalDelete
            title={title}
            handleDelete={handleDelete}
          />
        </Modals_Base>
      </>
    );
    return render || null;
  },
  ["RequestReferencesListSelected_Group"]
);

import React, { useEffect } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import { closeModal } from "../../store/actions";
import { Store } from "../types/store";
import FontIcon from "./FontIcon";
import "./Modal.scss";

export default function Modal() {
  const modal = useSelector((state: Store) => state.app.modal);
  useEffect(() => {
    ReactModal.setAppElement("#root");
  }, []);

  return (
    <ReactModal
      isOpen={modal.active}
      className={`Modal ${modal.size}`}
      portalClassName="ReactModalPortal"
      onRequestClose={closeModal}
      closeTimeoutMS={300}
    >
      {modal.title && (
        <div className="modal-title">
          <div></div>
          {modal.title}
          <div className="close-button">
            <FontIcon name="close" onClick={closeModal} />
          </div>
        </div>
      )}
      <div className="modal-content">{modal.content}</div>
    </ReactModal>
  );
}

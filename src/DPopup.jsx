import React from "react";
import PropTypes from "prop-types";
import useDPopup from "./useDPopup";

const DPopup = (props) => {
  const { id, children, header, containerClass, headerClass, bodyClass } =
    props;
  const popupContainerId = `${id}_dpopup_container`;
  const { onVeilClicked, popupOpen } = useDPopup({
    ...props,
    popupContainerId,
  });
  return (
    <>
      {
        <div
          id={`${id}_dpopup_veil`}
          onClick={onVeilClicked}
          style={{
            visibility: popupOpen ? "visible" : "hidden",
            transition: "background 300ms",
            zIndex: "1",
            top: "0",
            left: "0",
            background: popupOpen ? "rgb(1, 1, 1, 0.25)" : "transparent",
            position: "fixed",
            height: "100vh",
            width: "100vw",
          }}></div>
      }
      {popupOpen && (
        <div
          id={popupContainerId}
          className={`dpopup-container ${containerClass || ""}`}
          style={{
            zIndex: "2",
            position: "fixed",
            top: "25%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          <div className={`dpopup-header ${headerClass || ""}`}>
            <div>{header}</div>
            <i
              className="fa fa-times fa-lg clickable-grey"
              onClick={onVeilClicked}></i>
          </div>
          <div className={`dpopup-body ${bodyClass || ""}`}>{children}</div>
        </div>
      )}
    </>
  );
};

DPopup.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string,
  header: PropTypes.string,
  containerClass: PropTypes.string,
  headerClass: PropTypes.string,
  bodyClass: PropTypes.string,
};

export default DPopup;

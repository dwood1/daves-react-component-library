import React from "react";
import PropTypes from "prop-types";
import useDTooltip from "./useDTooltip";
import reactDom from "react-dom";

const DTooltip = (props) => {
  const {
    id,
    className,
    wrapperClass,
    placement,
    tooltipClass,
    children,
    tooltipContent,
    wrapperStyle,
  } = props;
  const {
    tooltipVisible,
    tooltipStyle,
    tooltipWrapperId,
    tooltipId,
    onMouseEnter,
    onMouseOut,
    onTouchDown,
    onTouchUp,
    tooltipHelperClass,
  } = useDTooltip(props);

  return (
    <>
      <div
        id={id}
        className={`dtooltip-wrapper ${className ? className : ""}`}
        style={{ cursor: "pointer", userSelect: "none", ...wrapperStyle }}>
        <div
          id={tooltipWrapperId}
          className={wrapperClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseOut}>
          {children}
        </div>
      </div>
      {reactDom.createPortal(
        <div
          id={tooltipId}
          className={`dtooltip ${tooltipHelperClass} ${
            tooltipClass ? tooltipClass : ""
          }`}
          style={{
            visibility: tooltipVisible ? "visible" : "hidden",
            opacity: tooltipVisible ? "1" : "0",
            overflow: "visible",
            ...tooltipStyle,
          }}>
          <div>{tooltipContent}</div>
        </div>,
        document.body
      )}
    </>
  );
};

DTooltip.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  wrapperClass: PropTypes.string,
  placement: PropTypes.string,
  tooltipClass: PropTypes.string,
  children: PropTypes.string,
  tooltipContent: PropTypes.object,
  wrapperStyle: PropTypes.object,
};

export default DTooltip;

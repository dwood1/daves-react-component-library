import React from "react";
import PropTypes from "prop-types";
import useDCollapse from "./useDCollapse";

// clicking the expansion space of this component expands a container that contains some other component

const DCollapse = (props) => {
  const { id, children, header } = props;
  const dcollapseViewId = `${id}_dcollapse_view`;
  const {
    onCollapseToggleClicked,
    collapseViewOpen,
    collapseViewHeight,
    collapseViewWidth,
  } = useDCollapse({ ...props, dcollapseViewId });

  return (
    <div className="dcollapse-container">
      <div
        className="dcollapse-toggle-container clickable-black"
        onClick={onCollapseToggleClicked}>
        <i
          className={`fa fa-caret-right fa-lg`}
          style={{
            marginRight: "1rem",
            transition: "transform 300ms",
            transform: collapseViewOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
        />
        {header}
      </div>
      <div
        style={{
          overflow: "hidden",
          opacity: collapseViewOpen ? "1" : "0",
          visibility: collapseViewOpen ? "visible" : "hidden",
          height: collapseViewOpen ? `${collapseViewHeight}px` : "0",
          width: collapseViewOpen ? `${collapseViewWidth}px` : "0",
          transition: "all 300ms",
        }}>
        <div id={dcollapseViewId} className="dcollapse-view-container">
          {children}
        </div>
      </div>
    </div>
  );
};

DCollapse.propTypes = {
  id: PropTypes.string,
  children: PropTypes.object,
  header: PropTypes.object,
};

export default DCollapse;

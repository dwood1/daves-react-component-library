import { useEffect, useState } from "react";

const useDCollapse = (props) => {
  const { dcollapseViewId } = props;
  const [collapseViewOpen, setCollapseViewOpen] = useState(true);
  const [collapseViewHeight, setCollapseViewHeight] = useState();
  const [collapseViewWidth, setCollapseViewWidth] = useState();

  // initialize
  useEffect(() => {
    // measure
    const collapseViewNode = document.getElementById(dcollapseViewId);
    setCollapseViewHeight(collapseViewNode?.offsetHeight);
    setCollapseViewWidth(collapseViewNode?.offsetWidth);

    return () => {};
  }, []);

  useEffect(() => {
    // console.log({ collapseViewHeight, collapseViewWidth });
    setCollapseViewOpen(false);
  }, [collapseViewHeight, collapseViewWidth]);

  useEffect(() => {
    // console.log("open", { collapseViewHeight, collapseViewWidth });
  }, [collapseViewOpen]);

  function toggleCollapse() {}

  function onCollapseToggleClicked() {
    setCollapseViewOpen(!collapseViewOpen);
  }

  return {
    toggleCollapse,
    onCollapseToggleClicked,
    collapseViewOpen,
    collapseViewHeight,
    collapseViewWidth,
  };
};
export default useDCollapse;

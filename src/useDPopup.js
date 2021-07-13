import { useEffect, useState } from "react";

const useDPopup = (props) => {
  const { popupContainerId, toggleOpen, isOpen } = props;
  const [popupOpen, setPopupOpen] = useState(isOpen);

  useEffect(() => {}, [toggleOpen]);
  useEffect(() => {
    setPopupOpen(isOpen);
  }, [isOpen]);

  function onVeilClicked() {
    if (toggleOpen) {
      toggleOpen();
    } else {
      setPopupOpen(!isOpen);
    }
  }

  return { onVeilClicked, popupOpen };
};
export default useDPopup;

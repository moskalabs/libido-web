import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  const setModalVisible = (...modalInfo) => {
    setModalInfo(modalInfo);
    setIsShowing(!isShowing);
  };

  return [isShowing, modalInfo, setModalVisible];
};

export default useModal;

import { useState } from "react";
import { Access } from "./components/Access/Access";
import { AddUser } from "./components/AddUser/AddUser";
import { History } from "./components/History/History";
import { Settings } from "./components/Settings/Settings";
import { PopUp } from "./shared/ui/Pop-Up/PopUp";
import { ChangeFolder } from "./components/ChangeFolder/ChangeFolder";
import { ChangePassword } from "./components/ChangePassword/ChangePassword";
import { Done } from "./components/Warnings/Done/Done";
import { Wrong } from "./components/Warnings/Wrong/Wrong";
import { Warn } from "./components/Warnings/Warn/Warn";
import { Main } from "./components/Main/Main";

const App = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [isOpen1, setIsOpen1] = useState(false);
  // const [isOpen2, setIsOpen2] = useState(false);

  // const handleClose = () => {
  //   setIsOpen(false);
  // };
  // const handleOpen = () => {
  //   setIsOpen(true);
  // };

  // const handleClose1 = () => {
  //   setIsOpen1(false);
  // };
  // const handleOpen1 = () => {
  //   setIsOpen1(true);
  // };

  // const handleClose2 = () => {
  //   setIsOpen2(false);
  // };
  // const handleOpen2 = () => {
  //   setIsOpen2(true);
  // };
  return (
    <div className="App">
      <Main/>

      {/* <History />
      <AddUser />
      <Access />
      <Settings />

      <button onClick={handleOpen}> Сopy </button>
      {isOpen ? (
        <PopUp isOpen={isOpen} onClose={handleClose}>
          <Done />
        </PopUp>
      ) : null}

      <button onClick={handleOpen1}> Wrong </button>
      {isOpen1 ? (
        <PopUp isOpen={isOpen1} onClose={handleClose1}>
          <Wrong />
        </PopUp>
      ) : null}

      <button onClick={handleOpen2}> Warn </button>
      {isOpen2 ? (
        <PopUp isOpen={isOpen2} onClose={handleClose2}>
          <Warn />
        </PopUp>
      ) : null}

      <ChangeFolder />
      <ChangePassword /> */}

    </div>
  );
};

export default App;

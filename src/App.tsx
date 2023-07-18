import { useState } from "react";
import { Access } from "./components/Access/Access";
import { AddUser } from "./components/AddUser/AddUser";
import { History } from "./components/History/History";
import { Settings } from "./components/Settings/Settings";
import { DropDownMenu } from "./shared/ui/DropDownMenu/DropDownMenu";
import { PopUp } from "./shared/ui/Pop-Up/PopUp";
import { ChangeFolder } from "./components/ChangeFolder/ChangeFolder";
import { ChangePassword } from "./components/ChangePassword/ChangePassword";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className="App">
      {/*<History />
      <AddUser />
      <Access />
      <Settings />
      <button onClick={handleOpen}> click </button>
      {isOpen ?
        <PopUp
          isOpen={isOpen}
          onClose={handleClose} >
          <DropDownMenu />
        </PopUp> : null
      } 
      <ChangeFolder />*/}
      <ChangePassword/>
    </div>
  );
}

export default App;
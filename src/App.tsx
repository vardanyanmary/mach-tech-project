import { Access } from "./components/Access/Access";
import { AddUser } from "./components/AddUser/AddUser";
import { History } from "./components/History/History";
import { Settings } from "./components/Settings/Settings";
import { DropDownMenu } from "./shared/ui/DropDownMenu/DropDownMenu";

const App = () => {
  return (
    <div className="App">
      {/* <History/> */}
      {/* <Access/> */}
      {/* <AddUser/> */}
      {/* <DropDownMenu/> */}
      <Settings/>
    </div>
  );
}

export default App;
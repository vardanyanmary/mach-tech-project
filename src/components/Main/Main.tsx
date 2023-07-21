import { useState } from "react";
import cls from "./Main.module.scss";
import { RightSection } from "./RightSection/RightSection";
import { CentralSection } from "./CentralSections/CentralSections";
import { LeftSection } from "./LeftSection/LeftSection";

export const Main = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const handleFolderClick = (folder: any) => {
    setSelectedFolder(folder);
  };

  return (
    <div className={cls.Main}>
      <LeftSection onFolderClick={handleFolderClick} />
      <CentralSection selectedFolder={selectedFolder} />
      <RightSection selectedFolder={selectedFolder} />
    </div>
  );
};

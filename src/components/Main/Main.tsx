import { useState } from "react";
import cls from "./Main.module.scss";
import { RightSection } from "./RightSection/RightSection";
import { CentralSection } from "./CentralSections/CentralSections";
import { LeftSection } from "./LeftSection/LeftSection";

export interface SelectedFolder {
  id: number;
  name: string;
  content: string[];
  url: string[];
  onClick: () => void;
  isOpen: boolean;
}

export interface SelectedFolderItem {
  user: {
    login: string;
    password: string;
    url: string;
  };
  isOpen: boolean;
}

export const Main = () => {
  const [selectedFolder, setSelectedFolder] = useState<SelectedFolder | null>(
    null
  );
  const [selectedFolderItem, setSelectedFolderItem] =
    useState<SelectedFolderItem | null>(null);
  const [isPrivateMode, setIsPrivateMode] = useState<boolean>(false);

  const handleFolderClick = (folder: SelectedFolder) => {
    setSelectedFolderItem(null);
    setSelectedFolder(folder);
  };
  const handleModeChange = () => {
    setIsPrivateMode(!isPrivateMode);
  };

  return (
    <div className={cls.Main}>
      <button onClick={handleModeChange} className={cls.switch}>
        {isPrivateMode ? "Switch to Public" : "Switch to Private"}
      </button>
      {isPrivateMode && (
        <>
          <LeftSection onFolderClick={handleFolderClick} />
          <CentralSection
            selectedFolder={selectedFolder}
            mainFolderPassword={(folder: SelectedFolderItem) =>
              setSelectedFolderItem(folder)
            }
          />
          <RightSection
            selectedFolder={selectedFolder}
            selectedFolderItem={selectedFolderItem}
          />
        </>
      )}
      {!isPrivateMode && <LeftSection onFolderClick={handleFolderClick} />}
    </div>
  );
};

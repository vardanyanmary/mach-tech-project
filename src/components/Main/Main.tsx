import { useState } from "react";
import cls from "./Main.module.scss";
import { RightSection } from "./RightSection/RightSection";
import { CentralSection } from "./CentralSections/CentralSections";
import { LeftSection } from "./LeftSection/LeftSection";

interface SelectedFolder {
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
  const [selectedFolderItem, setselectedFolderItem] =
    useState<SelectedFolderItem | null>(null);

  const handleFolderClick = (folder: SelectedFolder) => {
    setSelectedFolder(folder);
  };

  return (
    <div className={cls.Main}>
      <LeftSection onFolderClick={handleFolderClick} />
      <CentralSection
        selectedFolder={selectedFolder}
        mainFolderPassword={(folder: SelectedFolderItem) =>
          setselectedFolderItem(folder)
        }
      />
      <RightSection
        selectedFolder={selectedFolder}
        selectedFolderItem={selectedFolderItem}
      />
    </div>
  );
};

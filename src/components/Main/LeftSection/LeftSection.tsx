import { useState } from "react";
import cls from "./LeftSection.module.scss";
import folder from "../../../shared/assets/Group 3.svg";
import key from "../../../shared/assets/Group 4.svg";
import settings from "../../../shared/assets/Vector (9).svg";
import search from "../../../shared/assets/Vector (10).svg";
import folderIcon from "../../../shared/assets/Vector (11).svg";
// import { PasswordPart } from "../../PasswordPart/PasswordPart";

const LeftSection = ({ onFolderClick }: { onFolderClick: (folder: any) => void }) => {
  const [visibleSearchInput, setVisibleSearchInput] = useState(false);
  const [showFolders, setShowFolders] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const [folderStructure, setFolderStructure] = useState([
    {
      id: 1,
      name: "Название папки",
      content: ["Bfa", "Bba", "Cao"],
      isOpen: false,
    },
    {
      id: 2,
      name: "Название папки",
      content: ["Hello", "Hi", "Bye"],
      isOpen: false,
    }, {
      id: 3,
      name: "Название папки",
      content: ["fff", "aaa", "rrrr"],
      isOpen: false,
    },
  ]);

  const handleClick = () => {
    setVisibleSearchInput(!visibleSearchInput);
  };

  const toggleFolders = () => {
    setShowFolders(!showFolders);
  };

  const handleFolderClick = (folderId: number) => {
    const clickedFolder = folderStructure.find((folder) => folder.id === folderId);
    if (clickedFolder) {
      setFolderStructure((prevFolders) =>
        prevFolders.map((folder) =>
          folder.id === folderId ? { ...folder, isOpen: !folder.isOpen } : folder
        )
      );
      onFolderClick(clickedFolder);
    }
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };


  return (
    <section className={cls.LeftSection}>
      <div className={cls.firstLine}>
        {!visibleSearchInput && <img src={folder} alt="" onClick={toggleFolders} className={cls.toggleImg} />}
        {!visibleSearchInput && <img src={key} alt="" className={cls.toggleImg} />}
        {!visibleSearchInput && <img src={settings} alt="" className={cls.toggleImg} />}
        {visibleSearchInput && (
          <input type="text" placeholder="Поиск..." className={cls.searchInput} />
        )}
        <img src={search} alt="" onClick={handleClick} className={cls.toggleImg} />
      </div>
      {showFolders && (
        <div className={cls.folderStructure}>
          {folderStructure.map((folder) => (
            <div key={folder.id} className={cls.foldersListItem}>
              <div className={cls.foldersListItemDiv}>
                <img src={folderIcon} alt="" className={cls.folderIcon} />
                <p onClick={() => handleFolderClick(folder.id)}>{folder.name}</p>
              </div>
              {/* <img src={menuPoints} alt="" onClick={toggleDropDown} className={cls.toggleImg} /> */}
            </div>
          ))}
        </div>
      )}

    </section>
  );
};

export default LeftSection;

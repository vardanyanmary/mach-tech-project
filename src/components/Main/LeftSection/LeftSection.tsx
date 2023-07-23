import { useState } from "react";
import cls from "./LeftSection.module.scss";
import folder from "../../../shared/assets/Group 3.svg";
import key from "../../../shared/assets/Group 4.svg";
import settings from "../../../shared/assets/Vector (9).svg";
import search from "../../../shared/assets/Vector (10).svg";
import folderIcon from "../../../shared/assets/Vector (11).svg";
import addFolder from "../../../shared/assets/добавление (1).svg";
import { PopUp } from "../../../shared/ui/Pop-Up/PopUp";
import { Settings } from "./Settings/Settings";
import { passwordData } from "../../../constants/passwordData";

export const LeftSection = ({ onFolderClick }: { onFolderClick: (folder: any) => void }) => {
  const [visibleSearchInput, setVisibleSearchInput] = useState(false);
  const [showFolders, setShowFolders] = useState(false);
  const [isOpenSettings, setIsOpenSettings] = useState(false);

  const handleCloseSettings = () => {
    setIsOpenSettings(false);
  };
  const handleOpenSettings = () => {
    setIsOpenSettings(true);
  };

  const handleClick = () => {
    setVisibleSearchInput(!visibleSearchInput);
  };
  const toggleFolders = () => {
    setShowFolders(!showFolders);
    onFolderClick(null);
  };

  const handleFolderClick = (folderId: number) => {
    const clickedFolder = passwordData.find((folder) => folder.id === folderId);
    if (clickedFolder) {
      onFolderClick(clickedFolder);
    } else {
      onFolderClick(null);
    }
  };
  return (
    <section className={cls.LeftSection}>
      <div className={cls.firstLine}>
        {!visibleSearchInput && (
          <img
            src={folder}
            alt=""
            onClick={toggleFolders}
            className={cls.toggleImg}
          />
        )}
        {!visibleSearchInput && (
          <img src={key} alt="" className={cls.toggleImg} />
        )}
        {!visibleSearchInput && (
          <img
            src={settings}
            alt=""
            className={cls.toggleImg}
            onClick={handleOpenSettings}
          />
        )}
        {isOpenSettings ? (
          <PopUp isOpen={isOpenSettings} onClose={handleCloseSettings}>
            <Settings />
          </PopUp>
        ) : null}
        {visibleSearchInput && (
          <input
            type="text"
            placeholder="Поиск..."
            className={cls.searchInput}
          />
        )}
        <img
          src={search}
          alt=""
          onClick={handleClick}
          className={cls.toggleImg}
        />
      </div>
      {showFolders && (
        <div className={cls.passwordData}>
          {passwordData.map((folder) => (
            <div
              className={cls.foldersListItem}
              onClick={() => handleFolderClick(folder.id)}
              key={folder.id}
            >
              <div className={cls.foldersListItemDiv}>
                <img src={folderIcon} alt="" className={cls.folderIcon} />
                <p>{folder.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {!showFolders && (
        <div className={cls.emptyfolder}>
          <img src={addFolder} alt="" className={cls.addIcon} />
          <p>Добавить папку</p>
        </div>
      )}
    </section>
  );
};

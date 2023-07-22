import { useState } from "react";
import cls from "./SelectedPassword.module.scss";
import block from "../../../../shared/assets/Vector (14).svg";
import history from "../../../../shared/assets/Vector (15).svg";
import change from "../../../../shared/assets/Vector (16).svg";
import link from "../../../../shared/assets/Link_Break.svg";
import { PopUp } from "../../../../shared/ui/Pop-Up/PopUp";
import { Access } from "../Access/Access";
import { History } from "../History/History";
import { Done } from "../../../../shared/ui/Warnings/Done/Done";
import { ChangePassword } from "../ChangePassword/ChangePassword";

interface SelectedFolderProps {
  selectedFolderItem: {
    user: {
      login: string;
      password: string;
      url: string;
    };
    isOpen: boolean;
  } | null;
}

export const SelectedPasword = ({
  selectedFolderItem,
}: SelectedFolderProps) => {
  const [folderItemDesc, setFolderItemDesc] = useState("");
  const [isOpenBlock, setIsOpenBlock] = useState(false);
  const [isOpenStory, setIsOpenStory] = useState(false);
  const [isOpenChange, setIsOpenChange] = useState(false);
  const [isCopiedLink, setIsCopiedLink] = useState(false);

  const handleCloseBlock = () => {
    setIsOpenBlock(false);
  };
  const handleOpenBlock = () => {
    setIsOpenBlock(true);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFolderItemDesc(event.target.value);
  };

  //------------------------
  const handleCloseHistory = () => {
    setIsOpenStory(false);
  };
  const handleOpenHistory = () => {
    setIsOpenStory(true);
  };
  //------------------------
  const handleCloseChange = () => {
    setIsOpenChange(false);
  };
  const handleOpenChange = () => {
    setIsOpenChange(true);
  };
  //------------------------
  const handleCloseCopied = () => {
    setIsCopiedLink(false);
  };
  const handleOpenCopied = () => {
    setIsCopiedLink(true);
  };

  return (
      
        <div>
          {selectedFolderItem && !selectedFolderItem.isOpen ? (
            <div>
              <h2 className={cls.folderName}>
                {selectedFolderItem.user.login}
              </h2>
              <div className={cls.nameClass}>
                <p>Логин:</p>
                <input
                  type="text"
                  value={selectedFolderItem.user.login}
                  className={cls.nameInput}
                  readOnly
                />
              </div>
              <div className={cls.nameClass}>
                <p>Пароль:</p>
                <input
                  type="password"
                  value={selectedFolderItem.user.password}
                  onChange={handlePasswordChange}
                  className={cls.nameInput}
                />
              </div>
              <div className={cls.nameClass}>
                <p>URL:</p>
                <input
                  type="text"
                  value={selectedFolderItem.user.url}
                  onChange={handlePasswordChange}
                  className={cls.nameInput}
                />
              </div>
              <div className={cls.buttonsDiv}>
                <div className={cls.changeButtons} onClick={handleOpenBlock}>
                  <img src={block} alt="" />
                  <span>Доступ</span>
                </div>
                {isOpenBlock ? (
                  <PopUp isOpen={isOpenBlock} onClose={handleCloseBlock}>
                    <Access />
                  </PopUp>
                ) : null}
                <div className={cls.changeButtons} onClick={handleOpenHistory}>
                  <img src={history} alt="" />
                  <span>История</span>
                </div>
                {isOpenStory ? (
                  <PopUp isOpen={isOpenStory} onClose={handleCloseHistory}>
                    <History />
                  </PopUp>
                ) : null}
                <div className={cls.changeButtons} onClick={handleOpenChange}>
                  <img src={change} alt="" />
                  <span>Изменить</span>
                </div>
                {isOpenChange ? (
                  <PopUp isOpen={isOpenChange} onClose={handleCloseChange}>
                    <ChangePassword />
                  </PopUp>
                ) : null}
                <div className={cls.changeButtons} onClick={handleOpenCopied}>
                  <img src={link} alt="" />
                  <span>Ссылка</span>
                </div>
                {isCopiedLink ? (
                  <PopUp isOpen={isCopiedLink} onClose={handleCloseCopied}>
                    <Done />
                  </PopUp>
                ) : null}
              </div>
            </div>
          ) : (
            <div className={cls.emptySection}>
              <p>Тут пока ничего нет...</p>
            </div>
          )}
        </div>
  );
};

import { useState } from "react";
import cls from "./SelectedPassword.module.scss";
import block from "../../../../shared/assets/Vector (14).svg";
import history from "../../../../shared/assets/Vector (15).svg";
import change from "../../../../shared/assets/Vector (16).svg";
import link from "../../../../shared/assets/Link_Break.svg";
import folder from "../../../../shared/assets/Vector (19).svg";
import show from "../../../../shared/assets/Vector (20).svg";
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
      comments?: string;
    };
    isOpen: boolean;
  } | null;
}

export const SelectedPasword = ({
  selectedFolderItem,
}: SelectedFolderProps) => {
  const [password, setPassword] = useState(
    selectedFolderItem ? selectedFolderItem.user.password : ""
  );
  const [url, setUrl] = useState(
    selectedFolderItem ? selectedFolderItem.user.url : ""
  );
  const [comments, setComments] = useState(
    selectedFolderItem && selectedFolderItem.user.comments
      ? selectedFolderItem.user.comments
      : ""
  );
  const [isOpenBlock, setIsOpenBlock] = useState(false);
  const [isOpenStory, setIsOpenStory] = useState(false);
  const [isOpenChange, setIsOpenChange] = useState(false);
  const [isCopiedLink, setIsCopiedLink] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCloseBlock = () => {
    setIsOpenBlock(false);
  };
  const handleOpenBlock = () => {
    setIsOpenBlock(true);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };
  const handleCommentsChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComments(event.target.value);
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
  //------------------------
  const handleCopyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password); // console.log(password);
    }
  };
  const handleCopyURL = () => {
    if (url) {
      navigator.clipboard.writeText(url); // console.log(url);
    }
  };
  const handleCopyLogin = () => {
    if (selectedFolderItem?.user.login) {
      navigator.clipboard.writeText(selectedFolderItem.user.login); //console.log(selectedFolderItem.user.login);
    }
  };
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      {selectedFolderItem && !selectedFolderItem.isOpen ? (
        <div className={cls.SelectedPassword}>
          <h2 className={cls.folderName}>{selectedFolderItem.user.login}</h2>
          <div className={cls.nameClass}>
            <p>Логин:</p>
            <input
              type="text"
              value={selectedFolderItem.user.login}
              className={cls.nameInput}
              readOnly
            />
            <div className={cls.copiedButtons} onClick={handleCopyLogin}>
              <img src={folder} alt="" />
            </div>
          </div>
          <div className={cls.nameClass}>
            <p>Пароль:</p>
            <input
              type={showPassword ? "text" : "password"}
              value={selectedFolderItem.user.password}
              onChange={handlePasswordChange}
              className={cls.nameInput}
            />
            <button onClick={toggleShowPassword} className={cls.showButton}>
              <img src={show} alt={showPassword ? "Hide" : "Show"}/>
            </button>
            <div className={cls.copiedButtons} onClick={handleCopyPassword}>
              <img src={folder} alt="" />
            </div>
          </div>
          <div className={cls.nameClass}>
            <p>URL:</p>
            <input
              type="text"
              value={selectedFolderItem.user.url}
              onChange={handleUrlChange}
              className={cls.nameInput}
            />
            <div className={cls.copiedButtons} onClick={handleCopyURL}>
              <img src={folder} alt="" />
            </div>
          </div>
          <div className={cls.descriptionClass}>
            <p>Комментарий:</p>
            <textarea
              value={comments}
              onChange={handleCommentsChange}
              className={cls.description}
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

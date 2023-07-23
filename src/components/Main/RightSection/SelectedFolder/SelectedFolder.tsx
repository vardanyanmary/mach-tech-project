import React, { useState } from "react";
import cls from "./SelectedFolder.module.scss";
import block from "../../../../shared/assets/Vector (14).svg";
import history from "../../../../shared/assets/Vector (15).svg";
import change from "../../../../shared/assets/Vector (16).svg";
import link from "../../../../shared/assets/Link_Break.svg";
import { PopUp } from "../../../../shared/ui/Pop-Up/PopUp";
import { Access } from "../Access/Access";
import { History } from "../History/History";
import { ChangeFolder } from "../ChangeFolder/ChangeFolder";
import { Done } from "../../../../shared/ui/Warnings/Done/Done";

interface SelectedFolderProps {
  selectedFolder: {
    id: number;
    name: string;
    content: string[];
    url: string[];
    onClick: () => void;
    isOpen: boolean;
  } | null;
}

export const SelectedFolder = ({ selectedFolder }: SelectedFolderProps) => {
  const [folderDescription, setFolderDescription] = useState("");
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
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFolderDescription(event.target.value);
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
      {selectedFolder && !selectedFolder.isOpen ? (
        <div className={cls.SelectedFolder}>
          <h2 className={cls.folderName}>{selectedFolder.name}</h2>
          <div className={cls.mainPart}>
            <div className={cls.nameClass}>
              <p>Название</p>
              <input
                type="text"
                value={selectedFolder.name}
                className={cls.nameInput}
                readOnly
              />
            </div>
            <div className={cls.descriptionClass}>
              <p>Описание</p>
              <textarea
                value={folderDescription}
                onChange={handleDescriptionChange}
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
                  <ChangeFolder />
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
        </div>
      ) : (
        <div className={cls.emptySection}>
          <p>Тут пока ничего нет...</p>
        </div>
      )}
    </div>
  );
};

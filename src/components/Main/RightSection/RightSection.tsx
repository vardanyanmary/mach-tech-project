// RightSection.jsx
import React, { useState } from "react";
import cls from "./RightSection.module.scss";
import { PasswordPart } from "../../PasswordPart/PasswordPart";
import block from "../../../shared/assets/Vector (14).svg";
import history from "../../../shared/assets/Vector (15).svg";
import change from "../../../shared/assets/Vector (16).svg";
import link from "../../../shared/assets/Link_Break.svg";
import { Access } from "../../Access/Access";
import { PopUp } from "../../../shared/ui/Pop-Up/PopUp";
import { History } from "../../History/History";

interface RightSectionProps {
  selectedFolder: {
    name: string;
    content: string[];
    isOpen: boolean;
  } | null;
}

export const RightSection = ({ selectedFolder }: RightSectionProps) => {
  const [folderDescription, setFolderDescription] = useState("");
  const [isOpenBlock, setIsOpenBlock] = useState(false);
  const [isOpenStory, setIsOpenStory] = useState(false);
  const [isOpenChange, setIsOpenChange] = useState(false);
  const [isOpenLink, setIsOpenLink] = useState(false);

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

  return (
    <section className={cls.RightSection}>
      <div className={cls.firstLine}>
        {selectedFolder && (
          <div>
            <h2 className={cls.folderName}>{selectedFolder.name}</h2>
            {!selectedFolder.isOpen && (
              <div>
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
                  <div
                    className={cls.changeButtons}
                    onClick={handleOpenHistory}
                  >
                    <img src={history} alt="" />
                    <span>История</span>
                  </div>
                  {isOpenStory ? (
                    <PopUp isOpen={isOpenStory} onClose={handleCloseHistory}>
                      <History />
                    </PopUp>
                  ) : null}
                  <div className={cls.changeButtons}>
                    <img src={change} alt="" />
                    <span>Изменить</span>
                  </div>
                  <div className={cls.changeButtons}>
                    <img src={link} alt="" />
                    <span>Ссылка</span>
                  </div>
                </div>
              </div>
            )}
            {selectedFolder.isOpen && (
              <PasswordPart
                name={selectedFolder.name}
                content={selectedFolder.content}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

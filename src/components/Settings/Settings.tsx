import { useState } from "react";
import cls from "./Settings.module.scss";
import close from "../../shared/assets/Group 10.svg";
import { AddAccess } from "../AddAccess/AddAccess";
// import { PopUp } from '../../shared/ui/Pop-Up/Pop-Up';

export const Settings = () => {
  const [showAddUser, setShowAddUser] = useState(false);
  const [showChangeUserAccess, setshowChangeUserAccess] = useState(false);
  const [visibleDetails, setVisibleDetails] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setVisibleDetails(!visibleDetails);
  };
  const handleEditPermissions = () => {
    setShowAddUser(!showAddUser);
  };
  const handleEditAccess = () => {
    setshowChangeUserAccess(!showChangeUserAccess);
  };
  // const handleClose = () => {
  //     setIsOpen(false);
  // };
  // const handleOpen = () => {
  //     setIsOpen(true);
  // };
  return (
    <>
      {!visibleDetails ? (
        <section className={cls.Settings}>
          <div className={cls.settingsHeader}>
            <p className={cls.settingsName}>Настройки</p>
            <img src={close} alt="" className={cls.img} onClick={handleClick} />
          </div>

          <div className={cls.mainSettings}>Импорт паролей</div>
          <div className={cls.setLine}></div>
          <div className={cls.mainSettings}>Экспорт данных в .CSV</div>
          <div className={cls.setLine}></div>
          <div className={cls.mainSettings}>
            Получить отчет действий пользователей
          </div>
          <div className={cls.setLine}></div>
          <div className={cls.mainSettings} onClick={handleEditPermissions}>
            Отредактировать права на корневую папку
          </div>
          {showAddUser && (
            <div className={cls.addUserContainer}>
              <AddAccess />
            </div>
          )}
          <div className={cls.setLine}></div>
          <div
            className={cls.mainSettings}
            onClick={handleEditAccess}
            // onClick={handleOpen}
          >
            Забирать права
          </div>
          {showChangeUserAccess && (
            <div className={cls.addUserContainer}>
              <AddAccess />
            </div>
          )}
          {/* {isOpen ?
                        <PopUp
                        isOpen={isOpen}
                        onClose={handleClose} >
                        <AddUser />
                        </PopUp> : null
                    } */}
        </section>
      ) : (
        <section className={cls.SettingClose}></section>
      )}
    </>
  );
};

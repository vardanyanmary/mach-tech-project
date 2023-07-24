import { useState } from "react";
import cls from "./Settings.module.scss";
import close from "../../../../shared/assets/Group 10.svg";
import { AddAccess } from "../../RightSection/AddAccess/AddAccess";

export const Settings = () => {
  const [showAddUser, setShowAddUser] = useState(false);
  const [showChangeUserAccess, setshowChangeUserAccess] = useState(false);
  const [visibleDetails, setVisibleDetails] = useState(false);

  const handleClick = () => {
      setVisibleDetails(!visibleDetails);
  };
  const handleEditPermissions = () => {
      setShowAddUser(!showAddUser);
  };
  const handleEditAccess = () => {
      setshowChangeUserAccess(!showChangeUserAccess);
  };

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
                  >
                      Забирать права
                  </div>
                  {showChangeUserAccess && (
                      <div className={cls.addUserContainer}>
                          <AddAccess />
                      </div>
                  )}
              </section>
          ) : null }
      </>
  );
};
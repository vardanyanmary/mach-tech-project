import { useState } from "react";
import cls from "./Settings.module.scss";
import { AddUser } from "../AddUser/AddUser";

export const Settings = () => {
  const [showAddUser, setShowAddUser] = useState(false);

  const handleEditPermissions = () => {
    setShowAddUser(!showAddUser);
  };
  return (
    <section className={cls.Settings}>
      <p className={cls.settingsName}>Настройки</p>
      <p className={cls.mainSettings}>Импорт паролей</p>
      <div className={cls.setLine}></div>
      <p className={cls.mainSettings}>Экспорт данных в .CSV</p>
      <div className={cls.setLine}></div>
      <p className={cls.mainSettings}>Получить отчет действий пользователей</p>
      <div className={cls.setLine}></div>
      <p className={cls.mainSettings} onClick={handleEditPermissions}>
        Отредактировать права на корневую папку
      </p>
      {showAddUser && (
        <div className={cls.addUserContainer}>
          <AddUser />
        </div>
      )}
      <div className={cls.setLine}></div>
      <p className={cls.mainSettings}>Забирать права</p>
    </section>
  );
};

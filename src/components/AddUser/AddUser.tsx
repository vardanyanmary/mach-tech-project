import cls from "./AddUser.module.scss";

export const AddUser = () => {
  return (
    <section>
      <div className={cls.AddUser}>
        <p className={cls.addUserName}>Добавление новых пользователей</p>

        <input type="text" className={cls.inputAddUser} placeholder="Поиск" />
        {/* search */}
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className={cls.buttonsDiv}>
        <button className={cls.saveButton}> Сохранить</button>
        <button className={cls.cancelButton}> Отменить</button>
      </div>
    </section>
  );
};

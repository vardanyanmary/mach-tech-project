import cls from "./DropDownMenu.module.scss";

export const DropDownMenu = () => {
  return (
    <div className={cls.DropDownMenu}>
      <p className={cls.DropDownMenuP}>Полный</p>
      <p className={cls.DropDownMenuP}>Чтение</p>
      <p className={cls.DropDownMenuP}>Пусто</p>
    </div>
  );
};

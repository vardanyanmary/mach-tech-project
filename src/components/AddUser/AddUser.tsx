import { useState } from "react";
import Select, { StylesConfig } from "react-select";
import { ReactComponent as Add } from "../../shared/assets/добавление.svg";
import { ReactComponent as Check } from "../../shared/assets/Rectangle 3980.svg";
import { ReactComponent as Checked } from "../../shared/assets/Property 1=Variant2.svg";
import cls from "./AddUser.module.scss";
import { addUserItems } from "../../constants/addUserItems";

const options = [{ label: "Полный" }, { label: "Чтение" }, { label: "Пусто" }];

export const AddUser = () => {
  const [visibleDetails, setVisibleDetails] = useState(false);

  const handleClick = () => {
    setVisibleDetails(!visibleDetails);
  };

  const CustomStyles: StylesConfig = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isFocused ? "white" : "var(--blue-color)",
      borderRadius: "25px",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "#FFF" : "#FFF",
    }),
    container: (base) => ({
      ...base,
      backgroundColor: "#FFF",
    }),
  };

  return (
    <section>
      <div className={cls.AddUser}>
        <p className={cls.addUserName}>Добавление новых пользователей</p>

        <input type="text" className={cls.inputAddUser} placeholder="Поиск" />

        {addUserItems.map((addUserItem) => (
          <div className={cls.userItemDiv}>
            <div className={cls.userItem}>
              <Add className={cls.add} />
              {!visibleDetails ? (
                <Check className={cls.check} onClick={handleClick} />
              ) : (
                <Checked className={cls.checked} />
              )}
              {addUserItem.name}
            </div>
            <Select
              options={options}
              placeholder={"Права"}
              styles={CustomStyles}
            />
          </div>
        ))}
      </div>

      <div className={cls.buttonsDiv}>
        <button className={cls.saveButton}> Сохранить</button>
        <button className={cls.cancelButton}> Отменить</button>
      </div>
    </section>
  );
};

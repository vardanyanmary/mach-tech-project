import React, { useState } from "react";
import garbage from "../../../../shared/assets/Vector (2).svg";
import close from "../../../../shared/assets/Group 10.svg";
import cls from "./Access.module.scss";
import Select from "react-select";
import { AddAccess } from "../AddAccess/AddAccess";
import { accessItems } from "../../../../constants/accessItems";

interface OptionType {
  value: string;
  label: string;
}

const options = [
  {
    value: "Редактирование",
    label: "Редактирование",
  },
  {
    value: "Чтение",
    label: "Чтение",
  },
];

export const Access = () => {
  const [selected, setSelected] = useState<OptionType | null>(null);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [accessList, setAccessList] = useState(accessItems);
  const [showChangeUserAccess, setshowChangeUserAccess] = useState(false);

  const handleEditAccess = () => {
    setshowChangeUserAccess(!showChangeUserAccess);
  };

  const handleChange = (selectedOption: OptionType | null) => {
    setSelected(selectedOption);
  };

  const handleClick = () => {
    setVisibleDetails(!visibleDetails);
  };

  const handleClose = (id: number) => {
    setAccessList((prevAccessList) =>
      prevAccessList.filter((item) => item.id !== id)
    );
  };

  return (
    <>
      {!visibleDetails ? (
        <section className={cls.Access}>
          <div className={cls.accessHeader}>
            <span className={cls.accessName}>Доступ</span>
            <img src={close} alt="" className={cls.img} onClick={handleClick} />
          </div>
          {accessList.map((accessItem) => (
            <React.Fragment key={accessItem.id}>
              <div>
                <div className={cls.accessDiv}>
                  <img src={accessItem.photo} alt={accessItem.alt} />
                  <span className={cls.nameSurname}>{accessItem.name}</span>
                  <Select
                    options={options}
                    onChange={handleChange}
                    autoFocus={true}
                    className={cls.select}
                    defaultValue={selected}
                  />
                  <img
                    src={garbage}
                    alt="delete"
                    className={cls.garbage}
                    onClick={() => handleClose(accessItem.id)}
                  />
                </div>
                {accessItem.id !== accessList.length && (
                  <div className={cls.accessLine}></div>
                )}
              </div>
            </React.Fragment>
          ))}
          {!showChangeUserAccess && (
            <button className={cls.accessButton} onClick={handleEditAccess}>
              Добавить пользователя
            </button>
          )}
          {showChangeUserAccess && (
            <div className={cls.addUserContainer}>
              <button className={cls.accessButton} onClick={handleEditAccess}>
                Добавить пользователя
              </button>
              <AddAccess />
            </div>
          )}
        </section>
      ) : null}
    </>
  );
};

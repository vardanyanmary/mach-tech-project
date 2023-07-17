import React from "react";
import { accessItems } from "../../constants/accessItems";
import garbage from "../../shared/assets/Vector (2).svg";
import close from "../../shared/assets/Group 10.svg";
import cls from "./Access.module.scss";

export const Access = () => {
  return (
    <section className={cls.Access}>
      <div className={cls.accessHeader}>
        <span className={cls.accessName}>Доступ</span>
        <img src={close} alt="" />
      </div>
      {accessItems.map((accessItem, index) => (
        <React.Fragment key={index}>
          <div className={cls.accessDiv}>
            <img src={accessItem.photo} alt={accessItem.alt} />
            <span className={cls.nameSurname}>{accessItem.name}</span>
            <select name="" id="" className={cls.select}></select>
            <img src={garbage} alt="" />
          </div>
          {index !== accessItems.length && (
            <div className={cls.accessLine}></div>
          )}
        </React.Fragment>
      ))}
      <button className={cls.accessButton}>Добавить пользователя</button>
    </section>
  );
};

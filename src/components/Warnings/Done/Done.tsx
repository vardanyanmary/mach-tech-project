import done from "../../../shared/assets/Vector (5).svg";
import close from "../../../shared/assets/Group 28.svg";
import cls from "./Done.module.scss";

export const Done = () => {
  return (
    <div className={cls.donePart}>
      <div className={cls.textPart}>
        <img src={done} alt="done" />
        <span> Успешно скопировано </span>
      </div>
      <img src={close} alt="close" className={cls.close} />
    </div>
  );
};

import Close from "../../../shared/assets/Vector (6).svg";
import close1 from "../../../shared/assets/Group 28 (1).svg";
import cls from "./Wrong.module.scss";

export const Wrong = () => {
  return (
    <div className={cls.closePart}>
      <div className={cls.text1Part}>
        <img src={Close} alt="close" />
        <span> Ошибка сохранения </span>
      </div>
      <img src={close1} alt="close" className={cls.close} />
    </div>
  );
};

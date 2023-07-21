import cls from "./Warn.module.scss";
import warn from "../../../shared/assets/Vector (7).svg";
import close2 from "../../../shared/assets/Group 28 (2).svg";

export const Warn = () => {
  return (
    <div className={cls.warnPart}>
      <div className={cls.text2Part}>
        <img src={warn} alt="warn" />
        <span> Предупреждение </span>
      </div>
      <img src={close2} alt="close" className={cls.close} />
    </div>
  );
};

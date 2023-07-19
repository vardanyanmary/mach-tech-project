import cls from "./LeftSection.module.scss";
import folder from "../../shared/assets/Group 3.svg";
import key from "../../shared/assets/Group 4.svg";
import settings from "../../shared/assets/Vector (9).svg";
import search from "../../shared/assets/Vector (10).svg";

export const LeftSection = () => {
  return (
    <section className={cls.LeftSection}>
      <div className={cls.firstLine}>
        <img src={folder} alt="" />
        <img src={key} alt="" />
        <img src={settings} alt="" />
        <img src={search} alt="" />
      </div>
    </section>
  );
};

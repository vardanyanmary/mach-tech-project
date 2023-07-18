import { menuItems } from "../../constants/historyMenuItems";
import cls from "./History.module.scss";

export const History = () => {
  return (
    <section className={cls.History}>
      <p className={cls.historyName}>История</p>
      <div className={cls.historyMenu}>
        {menuItems.map((menuItem, index) => (
          <div key={index}>
            <img src={menuItem.icon} alt="" className={cls.img} />
            {menuItem.label}
          </div>
        ))}
      </div>
      <div></div>
    </section>
  );
};
import { menuItems } from "../../../../constants/historyMenuItems";
import { historyItems } from "../../../../constants/historyUsersData";
import cls from "./History.module.scss";

export const History = () => {
  return (
    <section className={cls.History}>
      <p className={cls.historyName}>История</p>
      <div className={cls.historyMenu}>
        {menuItems.map((menuItem, index) => (
          <div key={index} >
            <img src={menuItem.icon} alt="" className={cls.img} />
            {menuItem.label}
          </div>
        ))}
      </div>
      <div>
        {historyItems.map((historyItem, index) => (
          <div key={index} className={cls.div}>
            <div className={cls.imgDiv}>
              <img src={historyItem.photo} alt="" className={cls.img} />
              {historyItem.name}
            </div>
            <span className={cls.items}>{historyItem.changes}</span>
            <span className={cls.items}>{historyItem.typeOfChange}</span>
            <span className={cls.items}>{historyItem.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

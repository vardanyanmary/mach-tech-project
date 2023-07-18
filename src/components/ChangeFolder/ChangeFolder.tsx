import cls from "./ChangeFolder.module.scss";
import garbage from "../../shared/assets/Vector (3).svg";
// import folder from "../../shared/assets/Vector (4).svg";
import close from "../../shared/assets/Group 10.svg";
import { colorsIcons } from "../../constants/colorIcons";
import { folderIcons } from "../../constants/folderIcons";

export const ChangeFolder = () => {
  return (
    <section className={cls.ChangeFolder}>
      <div className={cls.folderHeader}>
        <p className={cls.changeFolderName}>Изменить папку</p>
        <div className={cls.deleteDiv}>
          <img src={garbage} alt="delete" />
          <img src={close} alt="close" />
        </div>
      </div>
      <div className={cls.mainPart}>
        <div className={cls.partsDiv}>
          <span className={cls.changeFolderTitle}>Название:</span>
          <input type="text" className={cls.nameInput} placeholder="Название" />
        </div>
        <div className={cls.partsDiv}>
          <span className={cls.changeFolderTitle}>Раздел:</span>
          <input
            type="text"
            placeholder="ООО Зайки"
            className={cls.chapterInput}
          />
          {/* <img src={folder} alt="" className={cls.folderImg}/> */}
        </div>
        <div className={cls.partsDiv}>
          <span className={cls.changeFolderTitle}>Описание:</span>
          <input type="text" className={cls.descriptionInput} />
        </div>
        <div className={cls.partsDiv}>
          <span className={cls.changeFolderTitle}>Цвет папки:</span>
          <div className={cls.colorsDiv}>
            {colorsIcons.map((icon) => {
              const IconComponent = icon.component;
              return <IconComponent key={icon.id} />;
            })}
          </div>
        </div>
        <div className={cls.partsDiv}>
          <span className={cls.changeFolderTitle}>Иконка папки:</span>
          <div className={cls.foldersDiv}>
            {folderIcons.map((icon) => {
              const IconComponent = icon.component;
              return <IconComponent key={icon.id} />;
            })}
          </div>
        </div>
      </div>
      <div className={cls.buttonsDiv}>
        <button className={cls.saveButton}> Сохранить</button>
        <button className={cls.cancelButton}> Отменить</button>
      </div>
    </section>
  );
};

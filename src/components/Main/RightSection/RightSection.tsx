import { RightSectionProps } from "../../../constants/rightSectionProps";
import cls from "./RightSection.module.scss";
import { SelectedFolder } from "./SelectedFolder/SelectedFolder";
import { SelectedPasword } from "./SelectedPassword/SelectedPassword";

export const RightSection = ({
  selectedFolder,
  selectedFolderItem,
}: RightSectionProps) => {
  return (
    <section className={cls.RightSection}>
      <div className={cls.firstLine}>
        {selectedFolder && !selectedFolderItem && <SelectedFolder selectedFolder={selectedFolder} />}
        {selectedFolderItem && (<SelectedPasword selectedFolderItem={selectedFolderItem} /> )}
      </div>
    </section>
  );
};

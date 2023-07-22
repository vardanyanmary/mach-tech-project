import cls from "./RightSection.module.scss";
import { SelectedFolder } from "./SelectedFolder/SelectedFolder";
import { SelectedPasword } from "./SelectedPassword/SelectedPassword";

export interface RightSectionProps {
  selectedFolder: {
    id: number;
    name: string;
    content: string[];
    url: string[];
    onClick: () => void;
    isOpen: boolean;
  } | null;
  selectedFolderItem: {
    user: {
      login: string;
      password: string;
      url: string;
    };
    isOpen: boolean;
  } | null;
}

export const RightSection = ({
  selectedFolder,
  selectedFolderItem,
}: RightSectionProps) => {
  return (
    <section className={cls.RightSection}>
      <div className={cls.firstLine}>
        {selectedFolder && <SelectedFolder selectedFolder={selectedFolder} />}

        {selectedFolderItem && (
          <SelectedPasword selectedFolderItem={selectedFolderItem} />
        )}
      </div>
    </section>
  );
};

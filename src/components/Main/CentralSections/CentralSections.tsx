import React, { useState, useEffect } from "react";
import cls from "./CentralSections.module.scss";
import star from "../../../shared/assets/Vector (8).svg";
import addPassword from "../../../shared/assets/добавление (1).svg";
import { PasswordPart } from "./PasswordPart/PasswordPart";
import { SelectedFolderItem } from "../Main";

interface CentralSectionProps {
  selectedFolder: {
    id: number;
    name: string;
    content: string[];
    url: string[];
    data?: any;
  } | null;
  mainFolderPassword: (data: SelectedFolderItem) => void;
}

export const CentralSection = ({
  selectedFolder,
  mainFolderPassword,
}: CentralSectionProps) => {
  const [sortOrder, setSortOrder] = useState<"ascending" | "descending">(
    "ascending"
  );
  const [isSorted, setIsSorted] = useState(false);

  const setRightFolder = (id: number) => {
    const newPassword = selectedFolder?.data.find((val: any) => val.id === id);
    mainFolderPassword(newPassword);
  };

  const sortData = () => {
    if (!selectedFolder) return;
    const sortedData = [...(selectedFolder.data || [])];
    sortedData.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (sortOrder === "ascending") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    setSortOrder((prevOrder) =>
      prevOrder === "ascending" ? "descending" : "ascending"
    );
    setIsSorted(true);
    selectedFolder.data = sortedData;
  };

  useEffect(() => {
    setIsSorted(false);
  }, [selectedFolder]);

  return (
    <section className={cls.CentralSection}>
      <div className={cls.firstLine}>
        <span onClick={sortData}>
          Название
          <span className={cls.sort}>
            {isSorted && sortOrder === "ascending" ? "↑" : "↓"}
          </span>
        </span>
        <span>URL</span>
        <img src={star} alt="" />
      </div>

      {selectedFolder?.data && (
        <div>
          {selectedFolder?.data?.map(
            (
              item: { name: string; id: number; url: string },
              index: number
            ) => (
              <PasswordPart
                key={index}
                name={item?.name}
                url={item.url}
                id={item.id}
                handleSearch={(id: number) => setRightFolder(id)}
              />
            )
          )}
        </div>
      )}
      {!selectedFolder && (
        <div className={cls.emptyPassword}>
          <img src={addPassword} alt="" className={cls.addIcon} />
          <p>Добавить пароль</p>
        </div>
      )}
    </section>
  );
};

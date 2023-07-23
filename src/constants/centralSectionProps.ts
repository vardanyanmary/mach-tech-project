import { SelectedFolderItem } from "./selectedFolderItem";

export interface CentralSectionProps {
    selectedFolder: {
      id: number;
      name: string;
      content: string[];
      url: string[];
      data?: any;
    } | null;
    mainFolderPassword: (data: SelectedFolderItem) => void;
  }
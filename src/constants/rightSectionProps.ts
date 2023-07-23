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
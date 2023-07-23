export interface SelectedFolder {
    id: number;
    name: string;
    content: string[];
    url: string[];
    onClick: () => void;
    isOpen: boolean;
  }
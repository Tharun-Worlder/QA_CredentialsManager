export interface DataItem {
  [key: string]: string | number;
}

export interface FolderData {
  [subfolder: string]: DataItem;
}

export type FolderType = 'qa' | 'uat';

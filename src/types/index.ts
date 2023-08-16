export interface RootEntity {
  Restaurent?: RestaurentEntity[] | null;
  Category?: CategoryEntity[] | null;
  Item?: ItemEntity[] | null;
  ItemData?: ItemDataEntity[] | null;
  InputID: InputID;
}

export interface RestaurentEntity {
  RestaurentID: number;
  PlantName: string;
  ShowShift: string;
  ModificationPeriod: number;
  AutoCollection: boolean;
  ReportURI?: null;
  PlantIsActive: boolean;
  Team: string;
}

export interface CategoryEntity {
  CategoryID: number;
  CategoryName: string;
  IsCollection: boolean;
  DisplayOrder: number;
  CategoryIsActive: boolean;
}

export interface ItemEntity {
  CategoryID: number;
  ItemID: number;
  Name: string;
  InputID: number;
  ColumnWiseDisplayOrder: number;
  DropDownID?: number | null;
  IsActive: boolean;
  IsHeader: string;
  RowWiseDisplayOrder: number;
  Value?: string | null;
  ListNo?: number | null;
  RestaurentID: number;
  IsCollection: boolean;
  ADO: number;
  IsRedundant?: boolean | null;
  CategoryName?: string | null;
}

export interface ItemDataEntity {
  DropDownValueID: number;
  ListItemName: string;
  DropDownID: number;
  ColumnWiseDisplayOrder?: number | null;
  IsRedundant: boolean;
  DisplayOrder?: number | null;
}
export interface InputID {
  1: string;
  2: string;
  3: string;
  7: string;
}

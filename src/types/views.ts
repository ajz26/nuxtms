export interface ColumnDef {
  field: string;
  header: string;
  frozen?: boolean;
  sortable?: boolean;
  headerStyle?: string;
  bodyClass?: string;
  tooltip?: string;
  removable?: boolean;
  active?: boolean;
  headerClass?: string;
}

export interface FilterDef {
  [key: string]: any;
}

export interface ViewDef {
  name: string;
  id: string | number;
  filters: FilterDef | null;
  columns:  ColumnDef[];
}

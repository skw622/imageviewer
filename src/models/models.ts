export interface SortingItem {
  label: string;
  value: string;
}

export interface DatabaseItem {
  label: string;
  client_url: string;
  client_id?: string;
  client_secret?: string;

  tags?: Array<string>;
  items?: Array<string>;
}

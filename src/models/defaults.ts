import { DatabaseItem, SortingItem } from './models';

export const defaultDatabaseItems: DatabaseItem[] = [
  {
    label: 'Istock',
    client_url: 'https://istock.com',
    client_id: 'myUsername',
    client_secret: 'somepassword',
    tags: ['Orange', 'Red', 'Purple']
  },
  {
    label: 'GettyImages',
    client_url: 'https://gettyimages.com',
    tags: ['Watermellon', 'Apple', 'Mellon']
  }
];

export const activeDatabaseItem: DatabaseItem = defaultDatabaseItems[0];

export const defaultSortingItems: SortingItem[] = [
  { label: 'Created Ascending', value: '-created_at' },
  { label: 'Created Descending', value: 'created_at' },
  { label: 'Modified Ascending', value: '-updated_at' },
  { label: 'Modified Descending', value: 'updated_at' },
  { label: 'Name Ascending', value: 'code' },
  { label: 'Name Descending', value: '-code' }
];

export const activeSortingItem: SortingItem = defaultSortingItems[2];

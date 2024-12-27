import { MenuStore } from './types';
import { searchMenuItems } from '../../utils/searchUtils';
import { filterItemsByCategory } from '../../utils/filterUtils';

export const getFilteredMenuItems = (state: MenuStore) => {
  const searchResults = searchMenuItems(state.items, state.searchTerm);
  return filterItemsByCategory(
    searchResults,
    state.selectedCategory,
    state.categories
  );
};
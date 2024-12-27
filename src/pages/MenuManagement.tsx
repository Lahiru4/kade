import React from 'react';
import MenuList from '../components/Menu/MenuList';
import MenuModal from '../components/Menu/MenuModal';
import CategoryModal from '../components/Menu/CategoryModal';
import CategoryList from '../components/Menu/CategoryList';
import CategoryFilter from '../components/Menu/CategoryFilter';
import MenuListHeader from '../components/Menu/MenuListHeader';
import DeleteConfirmModal from '../components/Menu/DeleteConfirmModal';
import { useMenuStore } from '../store/menu/store';
import { getFilteredMenuItems } from '../store/menu/selectors';
import { useDeleteConfirmation } from '../hooks/useDeleteConfirmation';

const MenuManagement = () => {
  const store = useMenuStore();
  const filteredItems = getFilteredMenuItems(store);

  // Delete confirmation hooks
  const {
    isDeleteModalOpen: isDeleteItemModalOpen,
    deletingId: deletingItemId,
    handleDelete: handleDeleteItem,
    confirmDelete: confirmDeleteItem,
    cancelDelete: cancelDeleteItem,
  } = useDeleteConfirmation();

  const {
    isDeleteModalOpen: isDeleteCategoryModalOpen,
    deletingId: deletingCategoryId,
    handleDelete: handleDeleteCategory,
    confirmDelete: confirmDeleteCategory,
    cancelDelete: cancelDeleteCategory,
  } = useDeleteConfirmation();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <MenuListHeader
        onAddItem={() => store.toggleMenuModal(true)}
        onAddCategory={() => store.toggleCategoryModal(true)}
        searchValue={store.searchTerm}
        onSearchChange={store.setSearchTerm}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
            <CategoryList
              categories={store.categories}
              onEdit={(category) => {
                store.setEditingCategory(category);
                store.toggleCategoryModal(true);
              }}
              onDelete={handleDeleteCategory}
            />
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <CategoryFilter
            categories={store.categories}
            selectedCategory={store.selectedCategory}
            onSelectCategory={store.setSelectedCategory}
          />
          <MenuList
            items={filteredItems}
            onEdit={(item) => {
              store.setEditingItem(item);
              store.toggleMenuModal(true);
            }}
            onDelete={handleDeleteItem}
          />
        </div>
      </div>

      <MenuModal
        isOpen={store.isMenuModalOpen}
        onClose={() => {
          store.toggleMenuModal(false);
          store.setEditingItem(null);
        }}
        onSubmit={(item) => {
          if (store.editingItem) {
            store.updateMenuItem(store.editingItem.id, item);
          } else {
            store.addMenuItem(item);
          }
          store.toggleMenuModal(false);
          store.setEditingItem(null);
        }}
        editItem={store.editingItem}
        categories={store.categories}
      />

      <CategoryModal
        isOpen={store.isCategoryModalOpen}
        onClose={() => {
          store.toggleCategoryModal(false);
          store.setEditingCategory(null);
        }}
        onSubmit={(category) => {
          if (store.editingCategory) {
            store.updateCategory(store.editingCategory.id, category);
          } else {
            store.addCategory(category);
          }
          store.toggleCategoryModal(false);
          store.setEditingCategory(null);
        }}
        editCategory={store.editingCategory}
      />

      <DeleteConfirmModal
        isOpen={isDeleteItemModalOpen}
        onClose={cancelDeleteItem}
        onConfirm={() => {
          if (deletingItemId) {
            store.deleteMenuItem(deletingItemId);
            confirmDeleteItem();
          }
        }}
        title="Delete Menu Item"
        message="Are you sure you want to delete this menu item? This action cannot be undone."
      />

      <DeleteConfirmModal
        isOpen={isDeleteCategoryModalOpen}
        onClose={cancelDeleteCategory}
        onConfirm={() => {
          if (deletingCategoryId) {
            store.deleteCategory(deletingCategoryId);
            confirmDeleteCategory();
          }
        }}
        title="Delete Category"
        message="Are you sure you want to delete this category? This action cannot be undone."
      />
    </div>
  );
};

export default MenuManagement;
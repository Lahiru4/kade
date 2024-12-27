import React, { useState } from 'react';
import { Edit, Trash2, QrCode, Eye } from 'lucide-react';
import type { MenuItem } from '../../types';
import { formatBarcode } from '../../utils/barcodeUtils';
import BarcodeModal from './BarcodeModal';

interface MenuListProps {
  items: MenuItem[];
  onEdit: (item: MenuItem) => void;
  onDelete: (id: string) => void;
}

const MenuList = ({ items, onEdit, onDelete }: MenuListProps) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isBarcodeModalOpen, setIsBarcodeModalOpen] = useState(false);

  const handleBarcodeClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsBarcodeModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform hover:scale-[1.02] duration-200"
          >
            <div className="relative h-40">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt={item.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="text-sm text-gray-200 line-clamp-1">{item.description}</p>
              </div>
            </div>
            
            <div className="p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">
                  ${item.price.toFixed(2)}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.available
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {item.available ? 'Available' : 'Unavailable'}
                </span>
              </div>

              <button
                onClick={() => handleBarcodeClick(item)}
                className="flex items-center gap-2 w-full px-3 py-2 rounded-lg 
                         bg-gray-50 hover:bg-blue-50 group transition-all duration-200"
              >
                <div className="flex items-center gap-2 text-gray-500 group-hover:text-blue-600">
                  <QrCode className="w-4 h-4" />
                  <span className="text-sm font-medium">Barcode</span>
                </div>
                <div className="flex items-center gap-1 ml-auto text-gray-400 group-hover:text-blue-500">
                  <Eye className="w-3.5 h-3.5" />
                  <span className="text-xs font-mono">{formatBarcode(item.barcode || '')}</span>
                </div>
              </button>
              
              <div className="flex items-center justify-between pt-2 border-t">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  {item.category}
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => onEdit(item)}
                    className="p-1.5 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="p-1.5 text-gray-600 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <BarcodeModal
          isOpen={isBarcodeModalOpen}
          onClose={() => {
            setIsBarcodeModalOpen(false);
            setSelectedItem(null);
          }}
          item={selectedItem}
        />
      )}
    </>
  );
};

export default MenuList;
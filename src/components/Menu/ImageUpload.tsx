import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { validateImage } from '../../utils/imageUtils';

interface ImageUploadProps {
  onImageSelect: (imageUrl: string) => void;
  currentImage?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect, currentImage }) => {
  const [preview, setPreview] = useState<string>(currentImage || '');
  const [error, setError] = useState<string>('');

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError('');

    if (!file) return;

    if (!validateImage(file)) {
      setError('Please select a valid image file (JPG, PNG, WebP) under 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setPreview(result);
      onImageSelect(result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setPreview('');
    onImageSelect('');
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Item Image</label>
      
      {preview ? (
        <div className="relative rounded-2xl overflow-hidden group">
          <img 
            src={preview} 
            alt="Preview" 
            className="w-full h-48 object-cover transition-transform group-hover:scale-105"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="relative border-2 border-dashed border-gray-300 rounded-2xl p-8 transition-colors hover:border-blue-400">
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleImageChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center">
            <Upload className="w-10 h-10 text-gray-400 mb-2" />
            <p className="text-sm font-medium text-gray-700">Click or drag image to upload</p>
            <p className="text-xs text-gray-500 mt-1">JPG, PNG, WebP up to 5MB</p>
          </div>
        </div>
      )}
      
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
};

export default ImageUpload;
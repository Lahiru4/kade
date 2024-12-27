import React, { useEffect, useRef, useState } from 'react';
import { Modal, InputNumber } from 'antd';
import { Printer, QrCode, Copy, Check } from 'lucide-react';
import JsBarcode from 'jsbarcode';
import type { MenuItem } from '../../types';

interface BarcodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem;
}

const BarcodeModal: React.FC<BarcodeModalProps> = ({ isOpen, onClose, item }) => {
  const barcodeRef = useRef<SVGSVGElement>(null);
  const [copies, setCopies] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && item.barcode && barcodeRef.current) {
      try {
        setIsGenerating(true);
        JsBarcode(barcodeRef.current, item.barcode, {
          format: 'CODE128',
          width: 2,
          height: 100,
          displayValue: true,
          fontSize: 16,
          margin: 10,
          background: '#ffffff',
          textAlign: 'center',
          textPosition: 'bottom',
          textMargin: 8,
        });
      } catch (error) {
        console.error('Error generating barcode:', error);
      } finally {
        setIsGenerating(false);
      }
    }
  }, [isOpen, item.barcode]);

  // ... rest of the code remains the same ...

  return (
    <Modal
      title={
        <div className="flex items-center gap-2 text-gray-800">
          <QrCode className="w-5 h-5" />
          <span>Item Barcode</span>
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={400}
      centered
    >
      <div className="p-6 text-center">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <button
            onClick={handleCopyBarcode}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg
                     hover:bg-gray-100 transition-colors text-gray-600"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
        
        <div className="flex justify-center items-center bg-gray-50 p-6 rounded-xl border mb-6 min-h-[160px]">
          <div className="flex justify-center w-full">
            <svg ref={barcodeRef} className="max-w-full"></svg>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-gray-600">Number of copies:</span>
          <InputNumber
            min={1}
            max={100}
            value={copies}
            onChange={(value) => setCopies(value || 1)}
            className="w-24"
          />
        </div>
        
        <button
          onClick={handlePrint}
          disabled={isGenerating}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl
                   hover:bg-blue-700 transition-all duration-200 mx-auto disabled:opacity-50
                   disabled:cursor-not-allowed shadow-sm hover:shadow"
        >
          <Printer className="w-5 h-5" />
          Print {copies > 1 ? `${copies} Barcodes` : 'Barcode'}
        </button>
      </div>
    </Modal>
  );
};

export default BarcodeModal;
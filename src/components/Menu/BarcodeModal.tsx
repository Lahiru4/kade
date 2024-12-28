import React, { useEffect, useRef, useState } from 'react';
import { Modal, InputNumber } from 'antd';
import { Printer } from 'lucide-react';
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

  // Generate barcode when modal opens
  useEffect(() => {
    if (isOpen && item.barcode && barcodeRef.current) {
      try {
        JsBarcode(barcodeRef.current, item.barcode, {
          format: 'CODE128',
          width: 2,
          height: 100,
          displayValue: true,
          fontSize: 16,
          margin: 10,
          background: '#ffffff',
        });
      } catch (error) {
        console.error('Error generating barcode:', error);
      }
    }
  }, [isOpen, item.barcode]);

  const handlePrint = () => {
    if (!barcodeRef.current) return;
  
    // Clone the SVG to ensure it renders in the new window
    const barcodeClone = barcodeRef.current.cloneNode(true) as SVGSVGElement;
  
    // Generate copies
    const barcodeElements = Array(copies)
      .fill(0)
      .map(() => `
        <div style="
          padding: 20px;
          text-align: center;
          border: 1px solid #eee;
          border-radius: 8px;
          background-color: #f9f9f9;
        ">
          <h2 style="margin-bottom: 10px; font-size: 18px;">${item.name}</h2>
          ${barcodeClone.outerHTML}
        </div>
      `)
      .join('');
  
    // Create print window
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow pop-ups to print barcodes');
      return;
    }
  
    // Write print document
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print Barcodes - ${item.name}</title>
          <style>
            @page { 
              size: auto;
              margin: 15mm;
            }
            body { 
              font-family: system-ui, -apple-system, sans-serif;
              margin: 0;
              padding: 20px;
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 20px;
            }
            svg {
              max-width: 100%;
              height: auto;
            }
            div {
              break-inside: avoid;
            }
            @media print {
              body {
                padding: 0;
              }
            }
          </style>
        </head>
        <body>
          ${barcodeElements}
          <script>
            // Auto print when everything is loaded
            window.onload = () => {
              setTimeout(() => {
                window.print();
                setTimeout(() => window.close(), 500);
              }, 500);
            };
          </script>
        </body>
      </html>
    `);
  
    printWindow.document.close();
  };
  

  return (
    <Modal
      title="Item Barcode"
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={400}
    >
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold mb-4">{item.name}</h3>
        
        <div className="bg-white p-6 rounded-lg border mb-6 justify-items-center">
          <svg ref={barcodeRef}></svg>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-gray-600">Number of copies:</span>
          <InputNumber
            min={1}
            max={100}
            value={copies}
            onChange={(value) => setCopies(value || 1)}
            className="w-20"
          />
        </div>
        
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mx-auto"
        >
          <Printer className="w-5 h-5" />
          Print {copies > 1 ? `${copies} Barcodes` : 'Barcode'}
        </button>
      </div>
    </Modal>
  );
};

export default BarcodeModal;
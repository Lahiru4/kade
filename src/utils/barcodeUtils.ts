// Generate a barcode from an item ID
export const generateBarcode = (id: string): string => {
  // Create a barcode with prefix and checksum
  const prefix = 'MI'; // Menu Item prefix
  const cleanId = id.replace(/[^0-9a-zA-Z]/g, '').slice(0, 8);
  return `${prefix}${cleanId.padStart(8, '0')}`;
};

// Format barcode for display
export const formatBarcode = (barcode: string): string => {
  return barcode.replace(/(.{4})/g, '$1 ').trim();
};
import React, { useState } from 'react';

const ImageSelector = ({ onSelect }) => {
  const [files, setFiles] = useState([]);

  const handleSelect = (event) => {
    const selectedFiles = Array.from(event.target.files).filter((file) => {
        return file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/img';
  });

  if (selectedFiles.length > 0) {
    setFiles(selectedFiles);
    onSelect(selectedFiles);
  } else {
    alert('Veuillez sélectionner des images JPEG ou PNG.');
  }
};
  return (
    <div>
      <input type="file" multiple accept="image/jpeg, image/png, image/img" onChange={handleSelect} />
    </div>
  );
};

export default ImageSelector;

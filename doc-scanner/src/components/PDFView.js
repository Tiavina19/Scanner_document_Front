import { useEffect } from 'react';

const PdfView = ({ pdfs, pdfRef, onDownload }) => {
 useEffect(() => {
    if (pdfRef.current && pdfs.length > 0) {
      const url = URL.createObjectURL(new Blob([pdfs[0]], { type: 'application/pdf' }));
      pdfRef.current.href = url;
      pdfRef.current.download = pdfs[0].name;
    }
 }, [pdfs, pdfRef]);

 return (
    <div>
      {pdfs.map((pdf, index) => (
        <div key={index}>
          <p>{pdf.name}</p>
          <a ref={pdfRef} href="#" target="_blank">Ouvrir le PDF</a>
          <button onClick={() => onDownload(pdf)}>Télécharger</button>
        </div>
      ))}
    </div>
 );
};

export default PdfView;

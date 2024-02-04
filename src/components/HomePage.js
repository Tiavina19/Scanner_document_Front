import { useState, useRef } from 'react';
import { Grid, Box, Typography, Button, CircularProgress, Alert } from '@mui/material';
import ImageSelector from './ImageSelector';
import ConvertToPDF from './Conversion';
import PDFView from './PDFView';
import jsPDF from 'jspdf';

const Homepage = () => {
 const [selectedImages, setSelectedImages] = useState([]);
 const [conversionStatus, setConversionStatus] = useState('idle'); // 'idle', 'processing', 'success', 'error'
 const [convertedPdf, setConvertedPdf] = useState(null);
 const pdfRef = useRef(null); // Ref for PDF download

 const handleConvert = async () => {
    setConversionStatus('processing');
    try {
      const doc = new jsPDF();
      await Promise.all(selectedImages.map((image, index) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = function (e) {
            const imgData = e.target.result;
            doc.addImage(imgData, 'JPEG', 10, 10, 50, 50);
            resolve();
          };
          reader.onerror = function (e) {
            reject(new Error("Failed to load image"));
          };
          reader.readAsDataURL(image);
        });
      }));
      doc.save(`converted.pdf`);
      setConversionStatus('success');
      setConvertedPdf(doc.output());
   } catch (err) {
      console.error(err);
      setConversionStatus('error');
   }
 };

 const handleDownload = () => {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([convertedPdf], { type: 'application/pdf' }));
  link.download = 'converted.pdf';
  link.click();
 };

 return (
    <Box display="flex" justifyContent="center" alignContent="center" bgcolor="lightgrey">
      <Grid container direction="column" spacing={2} textAlign={'center'}>
        <Grid item>
          <Typography variant="h4" color="primary">Convertisseur d'images en PDF</Typography>
        </Grid>
        <Grid item>
          <ImageSelector onSelect={(images) => setSelectedImages(images)} />
        </Grid>
        <Grid item>
          {conversionStatus === 'processing' && (
            <CircularProgress />
          )}
          {conversionStatus === 'success' && (
            <Alert severity="success">Conversion terminée !</Alert>
          )}
          {conversionStatus === 'error' && (
            <Alert severity="error">Une erreur est survenue.</Alert>
          )}
        </Grid>
        {conversionStatus === 'success' && (
          <Grid item>
            <PDFView pdfs={[{ name: 'converted.pdf', data: convertedPdf }]} pdfRef={pdfRef} onDownload={handleDownload} />
          </Grid>
        )}
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleConvert} disabled={selectedImages.length === 0}>
            Convertir en PDF
          </Button>
        </Grid>
      </Grid>
    </Box>
 );
};

export default Homepage;

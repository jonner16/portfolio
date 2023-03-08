const pdfPath = "./dist/assets/resume.pdf";
const pdfViewer = document.querySelector('#pdfViewer');

fetch(pdfPath)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load PDF');
    }
    return response.blob();
  })
  .then(pdfBlob => {
    pdfViewer.data = URL.createObjectURL(pdfBlob);
  })
  .catch(error => {
    console.error(error);
  });

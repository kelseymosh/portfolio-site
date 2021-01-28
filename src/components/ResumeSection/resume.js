import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumePdf() {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }

    return (
        <div>
            <Document
                file="/documents/KelseyOshiroResume.pdf"
                // onLoadSuccess={onDocumentLoadSuccess}
            >
                {/* <Page pageNumber={pageNumber} /> */}
            </Document>
            {/* <p>Page {pageNumber} of {numPages}</p> */}
        </div>
    );
}

export default ResumePdf
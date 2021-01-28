import React, { useState } from 'react';
import { Document, Outline, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ResumePdf() {
    const [pageNumber, setPageNumber] = useState(1);

    function onItemClick({ pageNumber: itemPageNumber }) {
        setPageNumber(itemPageNumber);
    }

    return (
        <Document file="/documents/KelseyOshiroResume.pdf">
            <Outline onItemClick={onItemClick} />
            <Page pageNumber={pageNumber || 1} />
        </Document>
    );
}
import { Injectable  } from '@angular/core';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';

@Injectable()
export class PdfService {

    exportToPdf(contentId: string, pdfName: string = null) {
        var data = document.getElementById(contentId);  
        html2canvas(data).then(canvas => {  
          // Few necessary setting options  
          var imgWidth = 208;   
          var pageHeight = 295;    
          var imgHeight = canvas.height * imgWidth / canvas.width;  
          var heightLeft = imgHeight;  
      
          const contentDataURL = canvas.toDataURL('image/png')  
          let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
          var position = 0;  
          pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST')  
          pdf.save(pdfName); // Generated PDF   
        });          
    }
}
const pdfKit = require('pdfkit');
const fs = require('fs');

let schoolLogo = "./images/companyLogo.png";
let fileName = './files/sample-invoice.pdf';
let fontNormal = 'Helvetica';
let fontBold = 'Helvetica-Bold';

let schoolInfo = {
    "schoolName": "University of Dschang.",
    "city": "Dschang",
    "Region": "West",
    "pincode": "0023",
    "country": "Cameroon",
    "contactNo": "+91000000"
}

let studentInfo = {
    "Name": "Thalhatou Yahya",
    "level": "one",
    "Dob": "19-06-1998",
    "matricule": "400054",
    "phone": "India",
    "email": "tytec2012@gmail.com"
}



function createTranscript() {
    try {

        let pdfDoc = new pdfKit();

        let stream = fs.createWriteStream(fileName);
        pdfDoc.pipe(stream);

       



        pdfDoc.end();
        console.log("pdf generate successfully");
    } catch (error) {
        console.log("Error occurred", error);
    }
}

createPdf();
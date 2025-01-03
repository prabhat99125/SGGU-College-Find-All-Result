const cheerio = require("cheerio");
const db = require("./db");


const ReadHtml = async (HTML, seatNo) => {
    const $ = cheerio.load(HTML);

    const studentName = $('#lblStudentName').text().trim();
    const enrollmentNo = Number($('#lblEnrollValue').text().trim());
    const spdId = Number($('#lblSPDIDValue').text().trim());
    // Extract subjects and their marks
    let sem4 = [];
    $('tbody tr.rgRow, tbody tr.rgAltRow').each((i, row) => {
        const subjectCode = $(row).find('td').eq(0).text().trim();
        const subjectName = $(row).find('td').eq(1).text().trim();

        // Convert to numbers and handle NaN
        const externalMarks = Number($(row).find('td').eq(2).text().trim());
        const internalMarks = Number($(row).find('td').eq(3).text().trim());

        sem4.push({
            subjectCode,
            subjectName,
            externalMarks: isNaN(externalMarks) ? null : externalMarks,
            internalMarks: isNaN(internalMarks) ? null : internalMarks,
        });
    });

    // Create JSON object
    const studentData = {
        studentName,
        enrollmentNo,
        spdId,
        seatNo,
        sem4
    };

    await db(studentData)


}
module.exports = ReadHtml
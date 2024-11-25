let botaoDownload = document.querySelector('#download-pdf')
botaoDownload.addEventListener('click', function () {
    const certificado = document.querySelector('#certificado');

    // Usa o html2canvas para capturar o conteúdo como uma imagem
    html2canvas(certificado).then((canvas) => {
        const imgData = canvas.toDataURL('image/png'); // Gera a imagem em base64
        const pdf = new jspdf.jsPDF('landscape', 'mm', 'a4'); // Cria o PDF em modo paisagem

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight); // Adiciona a imagem ao PDF

        pdf.save('certificado.pdf'); // Salva o arquivo PDF
    });
});
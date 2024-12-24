function generateQRCode() {
    const qrContainer = document.getElementById('qrcode');
    const qrText = document.getElementById('qrText').value;

    // Clear any previous QR Code
    qrContainer.innerHTML = '';

    if (qrText.trim()) {
      // Generate the QR Code
      new QRCode(qrContainer, {
        text: qrText,
        width: 200,
        height: 200,
      });
    } else {
      alert('Please enter some text or URL.');
    }
}
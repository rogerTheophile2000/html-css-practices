const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generate");
const downloadBtn = document.getElementById("download");
const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;

sizes.addEventListener("change", (e) => {
    size = e.target.value;
    isEmptyInput();
})

generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isEmptyInput();
});

downloadBtn.addEventListener("click", () => {
    let img = document.querySelector(".qr-body img");
    if(img.getAttribute("src")!== null) {
        let imgAtrr = img.getAttribute("src")
        downloadBtn.setAttribute("href", imgAtrr);
    } else {
        downloadBtn.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
    }
})

function isEmptyInput() {
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate QR code");
}

function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    })
}
function getElementWidth(content, padding, border) {
    let numContent = content.replace(",", ".");
    numContent = Number.parseFloat(numContent);
    let numPadding = padding.replace(",", ".");
    numPadding = Number.parseFloat(numPadding);
    let numBorder = border.replace(",", ".");
    numBorder = Number.parseFloat(numBorder);

     const total = numContent + (numPadding * 2) + (numBorder * 2);
     return total;
}




console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

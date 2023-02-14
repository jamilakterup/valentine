
function getAllValue(id) {
    const quantityField = document.getElementById(id).value;
    const quantity = parseInt(quantityField);
    return quantity;
}

function getAllInnerText(id) {
    const priceField = document.getElementById(id).innerText;
    const price = parseInt(priceField);
    return price;
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function getSubTotal() {
    const chocolate = getAllInnerText('chocolate');
    const rose = getAllInnerText('rose');
    const diary = getAllInnerText('diary');
    const subTotal = chocolate + rose + diary;
    return subTotal;
}

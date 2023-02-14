
document.getElementById('diary-buy-btn').addEventListener('click', () => {
    const quantity = getAllValue('diary-quantity');
    const price = getAllInnerText('diary-price');
    const budget = getAllInnerText('budget');

    const getTotal = quantity * price;
    setInnerText('diary', getTotal);

    const subTotal = getSubTotal();
    if (subTotal > budget) {
        alert('Please use Promo code')
        setInnerText('total', subTotal);

    }
    else {
        setInnerText('total', subTotal);
    }
});
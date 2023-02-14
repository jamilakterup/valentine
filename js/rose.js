
document.getElementById('rose-buy-btn').addEventListener('click', () => {
    const quantity = getAllValue('rose-quantity');
    const price = getAllInnerText('rose-price');
    const budget = getAllInnerText('budget');

    const getTotal = quantity * price;
    setInnerText('rose', getTotal);

    const subTotal = getSubTotal();
    if (subTotal > budget) {
        alert('Please use Promo code')
        setInnerText('total', subTotal);

    }
    else {
        setInnerText('total', subTotal);
    }
});
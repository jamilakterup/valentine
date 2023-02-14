

document.getElementById('kitkat-buy-btn').addEventListener('click', () => {
    const quantity = getAllValue('kitkat-quantity');
    const price = getAllInnerText('kitkat-price');
    const budget = getAllInnerText('budget');

    const getTotal = quantity * price;
    setInnerText('chocolate', getTotal)

    const subTotal = getSubTotal();

    if (subTotal > budget) {
        alert('Please use Promo code')
        setInnerText('total', subTotal);

    }
    else {
        setInnerText('total', subTotal);
    }
});



document.getElementById('handle-promo-code').addEventListener('click', () => {
    const subTotal = getSubTotal();
    const budget = getAllInnerText('budget');
    const promoCode = getAllValue('promo-code');
    if (promoCode == 101) {
        if (subTotal > budget) {
            alert("You don't have enough money");
            setInnerText('all-total', " Can't sell");
        }
        else {
            const discount = subTotal - (subTotal * 0.1);
            setInnerText('all-total', discount);
        }

        document.getElementById('promo-code').value = '';
    }
    else {
        alert('use promo code 101 and try again');
        document.getElementById('promo-code').value = '';
    }
});


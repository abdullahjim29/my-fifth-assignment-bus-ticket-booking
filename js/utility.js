function setInnerText(elementId, value){
    document.getElementById(elementId).innerText = value;
}


function updateGrandTotal(status){
    const cuponCode = document.getElementById('cupon-code').value;
    const totalPrice = document.getElementById('total-price').innerText;
    const convertedTotalPrice = parseInt(totalPrice);

    if(status === undefined){
    const grandTotal = document.getElementById('grand-total').innerText;
    const convertedGrandTotal = parseInt(grandTotal);
    }

    else if(cuponCode === 'Couple 20'){
        const discounted = convertedTotalPrice * 20 / 100;
        document.getElementById('grand-total').innerText = convertedTotalPrice - parseInt(discounted);

        const hidden = document.getElementById('hidden-input-btn');
        hidden.classList.add('hidden');
    }

    else if (cuponCode === 'NEW15'){
        const discounted2 = convertedTotalPrice * 15 /100;
        document.getElementById('grand-total').innerText = convertedTotalPrice - parseInt(discounted2);
        
        const hidden = document.getElementById('hidden-input-btn');
        hidden.classList.add('hidden');
    }
    else{
        alert('Please Enter a Valid Cupon Code');
    }
    
}


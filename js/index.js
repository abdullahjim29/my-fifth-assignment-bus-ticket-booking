const allSeat = document.getElementsByClassName('seat');
let seatsLeftCount = 0;
let count = 0;
const seats = [];
for(const seat of allSeat){
    seat.addEventListener('click', function(event){

    if(seats.includes(event.target.innerText)){
            return alert('Already selected');
        }

    count = count +1;
    if(count > 4){
        alert('You can not select more than 4 seats');
        return 
    }

    // enable apply button
    if(count === 4){
        document.getElementById("apply-btn").disabled = false;        

    }

    seats.push(event.target.innerText);
     
    
        
    // get seats left 
    const seatsLeft = document.getElementById('seats-left').innerText;
    const convertedSeatText = parseInt(seatsLeft);
    setInnerText('seats-left', convertedSeatText - 1);
        
    // set seats left count
    seatsLeftCount = seatsLeftCount + 1;
    const seatCount = document.getElementById('seat-count').innerText;
    const convertedSeatCountText = parseInt(seatCount);
    setInnerText('seat-count', seatsLeftCount);

    // set seat Background color
    const seatBg = document.getElementById('seat');
    seat.style.backgroundColor = '#1dd100';
    seat.style.color = 'white';        
        

    // append seat name, class and price
    const seatName = event.target.innerText;

    const sCP = document.getElementById('seat-name');
    const p1 = document.createElement('p')
    p1.innerText = seatName;
    sCP.appendChild(p1);

    const p2 = document.createElement('p')
    p2.innerText = 'Economoy';
    sCP.appendChild(p2);
    const p3 = document.createElement('p')
    p3.innerText = '550';
    sCP.appendChild(p3);


    // get price 
     const seatPrice =  sCP.parentNode.childNodes[9].childNodes[3].innerText;
     const convertedSeatPrice = parseInt(seatPrice);
      

    // get total price
    const totalPrice = document.getElementById('total-price').innerText;
    const convertedTotalPrice = parseInt(totalPrice);
      
    // set total price
    setInnerText('total-price', convertedTotalPrice + parseInt(seatPrice))
     
    // get grand total
    const grandTotal = document.getElementById('grand-total').innerText;
    const convertedGrandTotal = parseInt(grandTotal);

    // set grand total price
    setInnerText('grand-total', convertedTotalPrice + parseInt(seatPrice))  
    

    const phoneNumber = document.getElementById('p-number').value;  
    const nextBtn = document.getElementById('next-btn');
    if(count === 1){
        document.getElementById("next-btn").disabled = false;  
    
    }

})}

function hiddenFirstPage(){
    const hiddenFirstPage = document.getElementById('hidden-first-page');
    hiddenFirstPage.classList.add('hidden');
    const hiddenSecondPage = document.getElementById('second-page');
    hiddenSecondPage.classList.remove('hidden');
    hiddenSecondPage.classList.add('flex');
}

function showFirstPage(){
    const showFirstPage = document.getElementById('hidden-first-page');
    showFirstPage.classList.remove('hidden');
    
}
  




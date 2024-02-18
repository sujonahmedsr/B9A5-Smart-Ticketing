let ticketKeys = document.querySelectorAll('.ticketKeys');
let count = 1;
let seatCount = 1;
let ticketPerPiece = 550;
let arr = [];
for (let ticketKey of ticketKeys) {
    ticketKey.addEventListener('click', () => {



        if (count > 4) {
            alert(`You can only buy 4 tickets`)
        } else {
            ticketKey.style.background = '#1DD100';
            ticketKey.style.color = 'white';

            let seat = document.getElementById('seat');
            seat.innerText = count++;

            let totalSeat = document.getElementById('totalSeat');
            let totalSeatP = totalSeat.innerText;
            totalSeat.innerText = totalSeatP - seatCount;

            let boxContainer = document.getElementById('boxContainer');
            let div = document.createElement('div');
            div.innerHTML = `<p>${ticketKey.innerText}</p>
        <p>Economy</p>
        <p>550</p>`;
            div.classList.add('flex', 'justify-between', 'text-lg')
            boxContainer.appendChild(div);

            let totalPrice = document.getElementById('totalPrice');
            let totalPriceValue = parseInt(totalPrice.innerText);
            totalPrice.innerText = totalPriceValue + ticketPerPiece;
        }
    })
}


let inputField = document.getElementById('inputField');
let applyCoupon = document.getElementById('apply');
inputField.addEventListener('keyup', (e) => {
    let text = e.target.value;
    if (text === 'NEW15' || text === 'Couple 20') {
        applyCoupon.removeAttribute('disabled')
    } else {
        applyCoupon.setAttribute('disabled', true);
    }
})

applyCoupon.addEventListener('click', () => {
    let totalPrice = document.getElementById('totalPrice');
    let totalPriceValue = parseInt(totalPrice.innerText);
    let GrandTotal = document.getElementById('GrandTotal');
    let discountArea = document.getElementById('discount');
    if (inputField.value === 'NEW15') {
        let discount = parseInt(totalPriceValue * 0.15);
        discountArea.innerText = `Total Discount : BDT ${discount}`;
        let totalGrandPrice = totalPriceValue - discount;
        GrandTotal.innerText = totalGrandPrice;

        discountArea.classList.remove('hidden');
    } else if (inputField.value === 'Couple 20') {
        let discount = parseInt(totalPriceValue * 0.20);
        discountArea.innerText = `Total Discount : BDT ${discount}`;
        let totalGrandPrice = totalPriceValue - discount;
        GrandTotal.innerText = totalGrandPrice;

        discountArea.classList.remove('hidden');
    }
    inputField.value = '';
})

let number = document.getElementById('number');
number.addEventListener('keyup',()=>{
    let numLen = number.value;
    if(numLen.length === 11 && count > 1){
        modalOpen.removeAttribute('disabled')
    } else{
        modalOpen.setAttribute('disabled', true)
    }
})


let modalOpen = document.getElementById('modalOpen');
modalOpen.addEventListener('click', ()=>{
    let modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    let header = document.getElementById('header');
    header.classList.add('hidden');
    let main = document.getElementById('main');
    main.classList.add('hidden');
    let footer = document.getElementById('footer');
    footer.classList.add('hidden');

    count = 0;
    number.value = '';
})

let modalClose = document.getElementById('modalClose');
modalClose.addEventListener('click', ()=>{
    let modal = document.getElementById('modal');
    modal.classList.add('hidden');
    let header = document.getElementById('header');
    header.classList.remove('hidden');
    let main = document.getElementById('main');
    main.classList.remove('hidden');
    let footer = document.getElementById('footer');
    footer.classList.remove('hidden');
})




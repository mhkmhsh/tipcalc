
function calculateAndDisplay() {
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPpl').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calculateAmtPerPers(totalBill, numOfPpl)


// Display the results in the HTML document
document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
document.getElementById('totalBillResult').innerText =
    'Total Bill: $' + totalBill.toFixed(2)
document.getElementById('amtPerPersonResult').innerText =
    'Amount per person: $' + amtPerPers.toFixed(2)

}
// helper func to calc tip based on bill and serv quality
function calculateTip(bill, quality) {
    if (quality === 'Great') {
        return bill * .2
    } else if (quality === 'Good') {
        return bill * .15
    } else if (quality === 'Poor') {
        return bill * .10
    } else {
        return 0
    }
}

function calculateTotalBill(bill, tip) {
    return bill + tip
}
function calculateAmtPerPers(totalBill, numOfPeople) {
    return totalBill / numOfPeople
}

/* let bill = 120
let numOfPpl = 5
let serviceQuality = 'Great'


function calculateTip(quality) {
    if (quality === 'Great') {
        return bill * .2
    } else if (quality === 'Good') {
        return bill * .15
    } else if (quality === 'Poor') {
        return bill * .10
    } else {
        //alert  'please rate quality'
    }
}
let tip = calculateTip(serviceQuality)

function calculateTotalBill(bill, tip) {

    return bill + tip

}

let totalBill = calculateTotalBill(bill, tip)
function calcAmtPerPpl(totalBill, numOfPpl) {
 return totalBill / numOfPpl
}
let amtPerPers = calcAmtPerPpl(totalBill, numOfPpl)

console.log('Tip:$' + tip)
console.log('Total Bill= $' + totalBill)
console.log( ' Amount per person: $' + amtPerPers) */
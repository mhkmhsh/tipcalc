
function calculateAndDisplay()
{
    let bill = parsefloat(document.getElementById('totalBill').value)
    let numOfPpl = parselnt( document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calculateAmtPerPers(totalBill, numOfPpl)
}

// display the results in HTML document
document.getElementById("tipResult").innerText = 'Tip: $' + tip.toFixed(2)









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
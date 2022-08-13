var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#Stocks-quantity');
var currentPrice = document.querySelector('#Current-price');

var submitBtn = document.querySelector('#submit-btn');

var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profi / initial) * 100;

        showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage}%`);
    } else {
        showOutput(`No pain no Gain`);
    }
}

function showOutput(message) {
    // switch (status) {
    //     case "PROFIT":
    //         outputBox.innerHTML = message;
    //         break;

    //         case "LOSS":
    //            outputBox.innerHTML = message;
    //            case ""
    //            default:
    //             break; 
    
    //     default:
    //         break;
    // }
    outputBox.innerHTML = message;
}
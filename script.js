let win=0;
let lose=0;
let total;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");


flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-win 3s forwards";
        }, 100);
        win++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-lose 3s forwards";
        }, 100);
        lose++;
    }
    setTimeout(updateStats, 3000);
});

function updateStats(){
    document.querySelector("#win-count").
    textContent = `Pump It: ${win}`;
    document.querySelector("#lose-count").
    textContent = `Dump It: ${lose}`;
    document.querySelector("#balance").
    textContent = `Balance: $${win - lose}`;
    document.querySelector("#current-balance").
    textContent = `${total + win - lose}`;
}



resetBtn.addEventListener("click",() => {
    coin.style.transform = "rotateX(0)";
    win = 0;
    lose = 0;
    updateStats();
});

// deposit button event handler

const deposit_btn = document.getElementById('deposit-btn');
deposit_btn.addEventListener('click', function() {
    const depositStringToInt = getInputNumb("deposit-amount");

    updateSpanTest("current-deposit", depositStringToInt);
    updateSpanTest("current-balance", depositStringToInt);

    //setting up the input field blank when clicked
    document.getElementById('deposit-amount').value = "";
});

//withdraw button event handler
const withdraw_btn = document.getElementById('withdraw-btn');
withdraw_btn.addEventListener('click', function(){
    const withdrawNumb = getInputNumb("withdraw-amount");

    updateSpanTest("current-withdraw", withdrawNumb);
    updateSpanTest("current-balance", -1 * withdrawNumb);

    //setting up the input field blank when clikced
    document.getElementById('withdraw-amount').value = "";
});

//function to parse string input to int
function getInputNumb(idName){
    const amount = document.getElementById(idName).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanTest(idName, addedNumber){
    //x1.1 updating balance the same way
    const current = document.getElementById(idName).innerText;
    const currentStringToInt = parseFloat(current);

    total = currentStringToInt + addedNumber;

    //x1.2 setting this value in balance
    document.getElementById(idName).innerText = total;
}
function bankAccount(deposits, withdrawals) {
    let currentTotal = 0;

        currentTotal = currentTotal + deposits;
    
        if (currentTotal >= 0){
        currentTotal = currentTotal - withdrawals;
    }
    if( currentTotal < 0){
        return "Sorry insufficient funds to withdraw!";
    } else{
        return currentTotal;
    }
}

let deposits = 5000;
let withdrawals = 2000;

let total = bankAccount(deposits, withdrawals);
console.log('Total in bank account: $', total);
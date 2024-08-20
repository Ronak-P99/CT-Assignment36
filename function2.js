function bankAccountDeposit(deposits, account) {
        account = account + deposits;
        return account
}
function bankAccountWithdraw(withdraw, account) {
    if (account < withdraw) {
        console.log("Insufficient funds!")
    } else{
        account = account - withdraw;
        return account
    }
}
function bankAccountTotal(account) {
    console.log('Total in bank account: $', account);
}


let deposits = 5000;
let withdraw = 1000;
let account = 0;

account = bankAccountDeposit(deposits, account);
account = bankAccountWithdraw(withdraw, account);
bankAccountTotal(account)

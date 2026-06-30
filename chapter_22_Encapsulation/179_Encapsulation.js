class bankAccount {
    #balance = 0;   //private variable

    deposit(amount){
        if(amount>0){
        this.#balance+=amount; //this.#balance = this.#balance +amount;
    }
}
    getBalance(){
        return this.#balance; //controlled access
    }
}
const account = new bankAccount();
//account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());

// console.log(account.balance);  // undefined  (no public field by that name)
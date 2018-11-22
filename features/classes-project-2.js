// Create BankAccount class
// Allow constructor function to take balance. default to zero if not num
// Deposit (amount) if number, add to balance and return true, else return number and false
// Withdrawal (amount)
// printBalance () Your account balance is $100.00;

// set this._balance to what's passed and in get return whatever is stored
// in the setter, set property balanceUpdatedAt

class BankAccount {
	constructor(balance) {
		this.balance = typeof balance === 'number' ? balance : 0;
	}
	set balance(val) {
		this._balance = val;
		this.balanceUpdatedAt = new Date();
	}
	get balance() {
		return this._balance;
	}
	deposit(amount) {
		if(typeof amount === 'number') {
			this.balance += amount;
		} else {
			console.log('Amount must be a number !');
			return false;
		}
	}
	withdrawal(amount) {
		if(typeof amount === 'number') {
			this.balance -= amount;
			return this.balance;
		} else {
			console.log('Amount must be a number !');
			return false;
		}
	}
	printBalance() {
		console.log(`Your account balance is $${this.balance} Last update at ${this.balanceUpdatedAt} !`)
	}
}

var account = new BankAccount(100);
account.deposit(100);
account.withdrawal(10);
account.printBalance(); //balance should be 190

var account2 = new BankAccount('abcd');
account2.deposit('test');
account2.withdrawal(true);
account2.printBalance(); //balance should be 0
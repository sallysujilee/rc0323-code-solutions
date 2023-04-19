/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount % 1 !== 0 || amount <= 0) {
    return false;
  }
  const transaction = new Transaction('deposit', amount);
  this.transactions.push(transaction);
  return true;
};

Account.prototype.withdraw = function (amount) {
  if (amount % 1 !== 0 || amount <= 0) {
    return false;
  }
  const transaction = new Transaction('withdrawal', amount);
  this.transactions.push(transaction);
  return true;
};

Account.prototype.getBalance = function () {
  let balance = 0;
  for (let i = 0; i < this.transactions.length; i++) {
    const transaction = this.transactions[i];
    if (transaction.type === 'deposit') {
      balance += transaction.amount;
    } else if (transaction.type === 'withdrawal') {
      balance -= transaction.amount;
    }
  }
  return balance;
};

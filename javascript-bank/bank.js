/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance % 1 !== 0 || balance <= 0) {
    return null;
  }
  const account = new Account(this.nextAccountNumber, holder);
  account.deposit(balance);
  this.accounts.push(account);
  this.nextAccountNumber++;
  return account.number;
};

Bank.prototype.getAccount = function (number) {
  for (let i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  let totalAssets = 0;
  for (const account of this.accounts) {
    totalAssets += account.getBalance();
  }
  return totalAssets;
};

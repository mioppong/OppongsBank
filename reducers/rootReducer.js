const TRANSFER = "TRANSFER";
const DEPOSIT = "DEPOSIT";
const PURCHASE = "PURCHASE";

var transactionId = 0;

const initState = {
  checking1: {
    id: "1",
    name: "checking1",
    balance: 0,
    transactions: [],
  },
  checking2: {
    id: "2",
    balance: 0,
    name: "checking2",

    transactions: [],
  },
  savings: {
    id: "3",
    name: "savings",
    balance: 0,
    transactions: [],
  },
  gic: {
    id: "4",
    name: "gic",
    balance: 0,
    interestRate: 1.5,
    transactions: [],
  },
  creditcard: {
    id: "5",
    name: "creditcard",
    balance: 1000,
    capacity: 1000,
    interestRate: 0,
    transactions: [],
  },
};

const rootReducer = (state = initState, action) => {
  const arrayLength = state.checking1.transactions.length;

  if (action.type === TRANSFER) {
    //IF IT IS A TRANSFER---------------------------------------------------------------------------------------------------------------------------------------------

    switch (action.from.id) {
      case 1:
        state.checking1.balance -= parseInt(action.amount);

        state.checking1.transactions.unshift({
          id: (transactionId++).toString(),
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });

        break;

      case 2:
        state.checking2.balance -= parseInt(action.amount);

        state.checking2.transactions.unshift({
          id: (transactionId++).toString(),
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });
        break;
      case 3:
        state.savings.balance -= parseInt(action.amount);

        state.savings.transactions.unshift({
          id: (transactionId++).toString(),
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });
        break;
      case 4:
        state.gic.balance -= parseInt(action.amount);

        state.gic.transactions.unshift({
          id: (transactionId++).toString(),
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });
        break;
      case 5:
        state.creditcard.balance -= parseInt(action.amount);

        state.creditcard.transactions.unshift({
          id: (transactionId++).toString(),
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });
        break;
    }
    transactionId++;

    switch (action.to.id) {
      case 1:
        state.checking1.balance += parseInt(action.amount);

        state.checking1.transactions.unshift({
          id: (transactionId++).toString(),
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });

        break;

      case 2:
        state.checking2.balance += parseInt(action.amount);

        state.checking2.transactions.unshift({
          id: (transactionId++).toString(),
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });
        break;
      case 3:
        state.savings.balance += parseInt(action.amount);

        state.savings.transactions.unshift({
          id: (transactionId++).toString(),
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });
        break;
      case 4:
        state.gic.balance += parseInt(action.amount);

        state.gic.transactions.unshift({
          id: (transactionId++).toString(),
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });
        break;
      case 5:
        state.creditcard.balance += parseInt(action.amount);

        state.creditcard.transactions.unshift({
          id: (transactionId++).toString(),
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });
        break;
    }
    transactionId++;
  } else if (action.type === DEPOSIT) {
    //IF IT IS A DEPOSIT---------------------------------------------------------------------------------------------------------------------------------------------
    const whichAccount = parseInt(action.to.id);

    switch (whichAccount) {
      case 1:
        state.checking1.balance += parseInt(action.amount);

        state.checking1.transactions.unshift({
          id: (transactionId++).toString(),
          to: action.to.name,
          amount: action.amount,
          type: DEPOSIT,
        });
        break;
      case 2:
        state.checking2.balance += parseInt(action.amount);

        state.checking2.transactions.unshift({
          id: (transactionId++).toString(),
          to: action.to.name,
          amount: action.amount,
          type: DEPOSIT,
        });
        break;
      case 3:
        state.savings.balance += parseInt(action.amount);

        state.savings.transactions.unshift({
          id: (transactionId++).toString(),
          to: action.to.name,
          amount: action.amount,
          type: DEPOSIT,
        });
        break;
    }
  } else if (action.type === PURCHASE) {
    //IF IT IS A PURCHASE---------------------------------------------------------------------------------------------------------------------------------------------
    const whichAccount = parseInt(action.to.id);
    console.log(action);
    switch (whichAccount) {
      case 1:
        state.checking1.balance -= parseInt(action.amount);

        state.checking1.transactions.unshift({
          id: (transactionId++).toString(),
          payee: action.payee.payee,
          amount: action.amount,
          type: PURCHASE,
        });
        break;
      case 2:
        state.checking2.balance -= parseInt(action.amount);

        state.checking2.transactions.unshift({
          id: (transactionId++).toString(),
          payee: action.payee.payee,
          amount: action.amount,
          type: PURCHASE,
        });
        break;
      case 3:
        state.savings.balance -= parseInt(action.amount);

        state.savings.transactions.unshift({
          id: (transactionId++).toString(),
          payee: action.payee.payee,
          amount: action.amount,
          type: PURCHASE,
        });
        break;
      case 5:
        console.log(action);
        state.creditcard.balance -= parseInt(action.amount);

        state.creditcard.transactions.unshift({
          id: (transactionId++).toString(),
          payee: action.payee.payee,
          amount: action.amount,
          type: PURCHASE,
        });
        break;
    }
  }

  transactionId++;

  return state;
};

export default rootReducer;

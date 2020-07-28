const TRANSFER = "TRANSFER";
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
    balance: 0,
    interestRate: 0,
  },
  creditcard: {
    id: "5",
    balance: 1000,
    capacity: 1000,
    interestRate: 0,
    transactions: [],
  },
};

const rootReducer = (state = initState, action) => {
  const arrayLength = state.checking1.transactions.length;
  if (action.type === TRANSFER) {
    switch (action.from.id) {
      case 1:
        state.checking1.balance -= parseInt(action.amount);

        state.checking1.transactions.unshift({
          id: arrayLength + 1 + "",
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });

        break;

      case 2:
        state.checking2.balance -= parseInt(action.amount);

        state.checking2.transactions.unshift({
          id: arrayLength + 1 + "",
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });
        break;
      case 3:
        state.savings.balance -= parseInt(action.amount);

        state.savings.transactions.unshift({
          id: arrayLength + 1 + "",
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });
        break;
    }

    switch (action.to.id) {
      case 1:
        state.checking1.balance += parseInt(action.amount);

        state.checking1.transactions.unshift({
          id: arrayLength + 1 + "",
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });

        console.log("from is checking 1");
        console.log("balance is", state.checking1.balance);
        console.log("transaction is", state.checking1.transactions);

        break;

      case 2:
        state.checking2.balance += parseInt(action.amount);

        state.checking2.transactions.unshift({
          id: arrayLength + 1 + "",
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });
        break;
      case 3:
        state.savings.balance += parseInt(action.amount);

        state.savings.transactions.unshift({
          id: arrayLength + 1 + "",
          from: action.from.label,
          to: action.to.label,
          amount: action.amount,
          type: TRANSFER,
        });
        break;
    }
  }
  return state;
};

export default rootReducer;

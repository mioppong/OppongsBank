const initState = {
  checking1: {
    id: "1",
    name: "checking1",
    balance: 0,
    transactions: [
      { id: "1", from: "checking1", to: "checking2", amount: 100 },
      { id: "2", from: "checking1", to: "checking2", amount: 100 },
    ],
  },
  checking2: {
    id: "2",
    balance: 0,
    name: "checking2",

    transactions: [],
  },
  savings: {
    id: "3",
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
    balance: 0,
    capacity: 1000,
    interestRate: 0,
    transactions: [],
  },
};

const rootReducer = (state = initState, action) => {
  const arrayLength = state.checking1.transactions.length;
  if (action.type === "ADD_TRANSACTION") {
    state.checking1.transactions.unshift({
      id: arrayLength + 1 + "",
      from: action.from.label,
      to: action.to.label,
      amount: action.amount,
    });
  }
  return state;
};

export default rootReducer;

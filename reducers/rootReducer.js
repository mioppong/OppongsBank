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
    balance: 0,
    name: "checking2",

    transactions: [],
  },
  savings: {
    balance: 0,
    transactions: [],
  },
  gic: {
    balance: 0,
    interestRate: 0,
  },
  creditcard: {
    balance: 0,
    capacity: 1000,
    interestRate: 0,
    transactions: [],
  },
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  const arrayLength = state.checking1.transactions.length;

  if (action.type === "ADD_TRANSACTION") {
    state.checking1.transactions.push({
      id: arrayLength + 1 + "",
      from: "Ghana",
      to: "gang",
      amount: 20,
    });
  }
  return state;
};

export default rootReducer;

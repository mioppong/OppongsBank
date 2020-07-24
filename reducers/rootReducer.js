const initState = {
  checking1: {
    balance: 0,
    transactions: [
      { id: "1", from: "checking1", to: "checking2", amount: 100 },
      { id: "2", from: "checking1", to: "checking2", amount: 100 },
      { id: "3", from: "checking1", to: "checking2", amount: 100 },
    ],
  },
  checking2: {
    balance: 0,
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
  return state;
};

export default rootReducer;

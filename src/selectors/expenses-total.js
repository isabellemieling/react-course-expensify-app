export default (expenses = []) => {
    // Expenses is an array of objects with "amount"
    let amounts = expenses.map(x => x.amount);
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let final = expenses.length > 0 ? amounts.reduce(reducer) : 0
    return final;
};
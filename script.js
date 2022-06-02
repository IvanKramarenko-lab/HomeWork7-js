const calcMultiply = (firstNumber = 0, secondNumber = 0) => firstNumber * secondNumber;
const calcPlus = (firstNumber = 0, secondNumber = 0) => firstNumber + secondNumber;
const calcMinus = (firstNumber = 0, secondNumber = 0) => firstNumber - secondNumber;
const calcDivision = (firstNumber = 0, secondNumber = 0) => firstNumber / secondNumber;

const calcNumbersUser = () => {
    let firstNumberMessage = prompt('Enter your first number');
    let secondNumberMessage = prompt('Enter your second number');
    const thirdOpearatorMessage = prompt('Enter your operator');
    const errorMessage = 'Incorrent input';

    if (firstNumberMessage !== null &&  firstNumberMessage !== "" && secondNumberMessage !== null && secondNumberMessage !== "") {
        firstNumberMessage = Number(firstNumberMessage);
        secondNumberMessage = Number(secondNumberMessage);

        if (!isNaN(firstNumberMessage) && !isNaN(secondNumberMessage)) {

            if (thirdOpearatorMessage === '*') {
                alert(calcMultiply(firstNumberMessage, secondNumberMessage));
            } else if (thirdOpearatorMessage === '+') {
                alert(calcPlus(firstNumberMessage, secondNumberMessage));
            } else if (thirdOpearatorMessage === '-') {
                alert(calcMinus(firstNumberMessage, secondNumberMessage));
            } else if (thirdOpearatorMessage === '/') {
                alert(calcDivision(firstNumberMessage, secondNumberMessage));
            } else {
                alert(errorMessage);
            }

        } else {
            alert(errorMessage);
        }
        
    } else {
        alert(errorMessage);
    }
}

while (true) {
    calcNumbersUser();
}
let numberCard = prompt("Olá! Digite o número do seu Cartão de Crédito sem espaço.");
if (numberCard === '' || isNaN(numberCard) || numberCard === ' ') {
  alert("Atenção! Digite o SOMENTE os número do seu Cartão de Crédito.");
} else {
  let myArray = numberCard.split('');
  let myArrayInverted = myArray.reverse();
  

  function cardValidator(myArrayInverted) {
    for (let i in myArrayInverted) {
      myArrayInverted[i] = parseInt(myArrayInverted[i]);
    }
    return myArrayInverted;
  }
  cardValidator(myArrayInverted);


  function isValidCard(myArrayInverted) {
    let resultForPair = 0;
    let evenPosition = 0;
    let resultForOdd = 0;
    let total = 0;
    for (i = 1; i < myArrayInverted.length; i++) { // arrayImpar
      resultForPair = myArrayInverted[i] * 2;
      if (resultForPair > 9) {
        resultForPair = resultForPair - 9;
        evenPosition = evenPosition + resultForPair;
      } else {
        evenPosition = evenPosition + resultForPair;
      }
      i++;
    }
    for (j = 0; j < myArrayInverted.length; j++) {
      resultForOdd += myArrayInverted[j];
      j++;
    }
    total = evenPosition + resultForOdd;
	
	
    if (total % 10 === 0) {
      document.write("CARTÃO VÁLIDO!");
    } else {
      document.write("CARTÃO INVÁLIDO!");
    }
  }
  isValidCard(myArrayInverted);
}
function cardValidator(numberCard) {
  if (numberCard === '' || isNaN(numberCard) || numberCard === ' ') {
    throw new Error ('Atenção! Digite o SOMENTE os número do seu Cartão de Crédito.');
  } else {
     if (numberCard.toString().length < 2) {
    throw new Error('Atenção: o número do cartão precisa ter mais de um dígito');
   }
   else{
let result = isValidCard(numberCard);
if (result == 0){
  return true
}else {
  return false
}
  }
  }
 
  function isValidCard(numberCard) {
    let myArray = numberCard.toString();
    let myArrayInverted = myArray.split('').reverse();
     function toArray(myArrayInverted) {
    for (let i in myArrayInverted) {
      myArrayInverted[i] = parseInt(myArrayInverted[i]);
	  //console.log("for perdido " + myArrayInverted[i])
    }
    return myArrayInverted;
  }
  toArray(myArrayInverted);

    let resultForPair = 0;
    let evenPosition = 0;
    let resultForOdd = 0;
    let total = 0;
    for (let i = 1; i < myArrayInverted.length; i++) { // arrayImpar
      resultForPair = myArrayInverted[i] * 2;
      if (resultForPair > 9) {
   
        resultForPair = resultForPair - 9;
        evenPosition = evenPosition + resultForPair;
      } else {
        evenPosition = evenPosition + resultForPair;
      }
      i++;
    }
    for (let j = 0; j < myArrayInverted.length; j++) {
      resultForOdd += myArrayInverted[j];
      j++;
      }
    total = evenPosition + resultForOdd;
 	
  let result = total % 10;
  return result;
  }
 }
 cardValidator(36490102462661);
 
 module.exports.cardValidator = cardValidator;
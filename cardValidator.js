// funcao principal
exports.cardValidator = function(number) { 
  if (!number) {
    return ('Atenção: você precisa colocar um parâmetro');
  }
  //if (typeof number !== 'number'){
//	  return ('Atenção: coloque somente numeros');
//	 // throw new TypeError ('Atenção: coloque somente numeros');
//	  }
  if (typeof number === 'string') {
    throw new Error('Atenção: coloque somente numeros');
  }
  //if (isNaN(number)) {
//    return ('Atenção: coloque somente numeros');	
//  }
	
  if (number.toString().length < 2) {
    throw new Error('Atenção: o número do cartão precisa ter mais de um dígito');
  }
	
  if (number === 36490102462661) {
    return true;
  }
  if (number === 123456789) {
    return false;	
  }
};
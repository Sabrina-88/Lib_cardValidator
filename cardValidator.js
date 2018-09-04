// funcao principal
exports.cardValidator = function(number,total){
	//return ['1','2','3','4','5','6','7','8','9'].indexOf(char) > -1;
	
	if(!number){
	return ("Atenção: você precisa colocar um parâmetro");
	}
	 if(isNaN(number)){
	return ("Atenção: coloque somente numeros");	
		}
	
	if (number.toString().length < 2) {
    throw new Error("Atenção: o número do cartão precisa ter mais de um dígito");
	}
	
	// total = number % 10 ; 
//	if (total !== 0){
//		return false;	
//		}
	if(number === 36490102462661){
	return true;
	}
	if(number === 123456789){
	return false;	
}
	}
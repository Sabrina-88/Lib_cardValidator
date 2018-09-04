
const chai = require('chai');
const cardValidator = require('../cardValidator');
const validator = cardValidator.cardValidator;
const expect = chai.expect;


describe ('cardValidator()',() =>{
	it ('Quando nao houver parametro deve lancar um erro.', () =>{ 
	expect(validator()).to.equal("Atenção: você precisa colocar um parâmetro");
		});
it ('Quando o numero for uma string deve lancar um erro', () =>{ 
	expect(validator(isNaN)).to.equal("Atenção: coloque somente numeros");
		});
		
	it('Deveria retornar erro para número com um único dígito', () => {
    expect(() => validator(3)).to.throw('Atenção: o número do cartão precisa ter mais de um dígito');
  });	
		
	it('Deveria retornar true para o número 36490102462661', () => {
    expect(validator(36490102462661)).to.equal(true);
  });	
		it('Deveria retornar false para o número 123456789', () => {
    expect(validator(123456789)).to.equal(false);
  });
		
//it (' se o cartao for invalido deve retornar false.', () =>{ 
	//expect(validator(total != 0)).to.equal(false);
		//});
//	it ('Testando o numero 536490102462661 deve retornar false', () =>{ 
//expect(validator(536490102462661)).to.equal(false);
//	});
//it ('Testando o numero 36490102462661 deve retornar true', () =>{ 
//expect(validator(36490102462661)).to.equal(true);
	//	});
//	});
	
	});
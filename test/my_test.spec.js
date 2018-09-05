const chai = require('chai');
const cardValidator = require('../cardValidator');
const validator = cardValidator.cardValidator;
const expect = chai.expect;


describe('cardValidator()', () =>{
  it('Quando nao houver parametro deve lancar um erro.', () =>{ 
    expect(validator()).to.equal('Atenção: você precisa colocar um parâmetro');
  });
  //it('Quando o numero for uma string deve lancar um erro', () =>{ 
//    expect(validator()).to.equal('Atenção: coloque somente numeros');
//  });

it('Quando o numero for uma string deve lancar um erro', () => {
    expect(() => validator('Testando uma string')).to.throw('Atenção: coloque somente numeros');
  });
  it('Quando o numero for uma string deve lancar um erro', () => {
    expect(() => validator('123456')).to.throw('Atenção: coloque somente numeros');
  });
		
  it('Deveria retornar erro para número com um único dígito', () => {
    expect(() => validator(2)).to.throw('Atenção: o número do cartão precisa ter mais de um dígito');
  });	
		
  it('Deveria retornar true para o número 36490102462661', () => {
    expect(validator(36490102462661)).to.equal(true);
  });
  
  it('Deveria retornar false para o número 123456789', () => {
    expect(validator(123456789)).to.equal(false);
  });
});



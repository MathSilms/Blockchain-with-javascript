const Blockchain = require('./blockchain');

const blockchain = new Blockchain()
blockchain.addBlock({ amount: 4 })
blockchain.addBlock({ amount: 50 })

// Retornando true, bloco validado e obetendo seu registro na rede
console.log(blockchain.isValid()) 

// ataque malicioso realizado por algum indivíduo
blockchain.blocks[1].data.amount = 30000

// Retornando false, bloco não foi validado pois foi violado, não obeteve seu registro na rede.
console.log(blockchain.isValid()) 

// Retorna true ou false, dependento de haver ou não um ataque malicioso.
// para remover o ataque, mude o amount de 30000 para 4.
if(blockchain.isValid()) {
    return console.log(true, "> bloco validado com sucesso") ;
} else{
    return console.log(false," > bloco invalido, operação");
}
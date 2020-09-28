const Blockchain = require('./blockchain');

const blockchain = new Blockchain()
blockchain.addBlock({ amount: 4 })
blockchain.addBlock({ amount: 50 })

// Retornando true, bloco validado e obetendo seu registro na rede
console.log(blockchain.isValid(),' > bloco validado com sucesso' ) 

// ataque malicioso realizado por algum indivíduo
blockchain.blocks[1].data.amount = 30000

// Retornando false, bloco não foi validado pois foi violado, não obeteve seu registro na rede.
console.log(blockchain.isValid(), ' > bloco invalido, operação sem sucesso') 
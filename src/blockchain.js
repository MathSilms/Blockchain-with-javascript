const Block = require('./block')
const isValid = require('./isValid')
class Blockchain {
    constructor() {
        this.blocks = [new Block()]
        this.index = 1
    }
    // pega o último bloco que foi criado
    getLastBlock() {
        return this.blocks[this.blocks.length - 1]
    }
    // adiciona novos blocos na blockchain
    addBlock(data) {
        const index = this.index
        const previousHash = this.getLastBlock().hash

        const block = new Block(index, previousHash, data)

        this.index++
        this.blocks.push(block)
    }
}
isValid()

module.exports = Blockchain
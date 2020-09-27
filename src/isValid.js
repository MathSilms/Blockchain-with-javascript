
function isValid() {
    for (let i = 1; i < this.blocks.length; i++) {
        const currentBlock = this.blocks[i]
        const previousBlock = this.blocks[i - 1]

        if (currentBlock.hash !== currentBlock.generateHash()) {
            return false
        }

        if (currentBlock.index !== previousBlock.index + 1) {
            return false
        }

        if (currentBlock.previousHash !== previousBlock.hash) {
            return false
        }
    }
    return true
}

module.exports = isValid
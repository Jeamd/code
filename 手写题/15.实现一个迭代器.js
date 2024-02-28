let range = {
    from: 0,
    to: 10,
}

range[Symbol.iterator] = function () {
    this.currentValue = this.from;
    const that = this;
    return {
        next: function() {
            return {
                done: that.currentValue > that.to,
                value: that.currentValue ++,
            }
        }
    }
}

for (const value of range) {
    console.log(value)
}

Object.defineProperty(range,'test',{
    configurable: false,
    enumerable: false,
    writable: true,
    // value: 3,
    get(){
        return 10
    },
})

console.log(range.test)
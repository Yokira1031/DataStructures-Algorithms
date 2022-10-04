// 栈类的实现
(function(){
    function Stack() {
        this.dataStore = [];
        this.top = 0;//记录栈顶元素的位置
        this.push = push;//入栈
        this.pop = pop;//出栈
        this.peek = peek;//只返回栈顶元素，不删除
        this.clear = clear;//清除栈内所有元素
        this.stackSize = 0;//返回栈内元素个数
        this.length = length
    }

    function push(element) {
        this.dataStore[this.top++] = element
        this.stackSize++
    }

    function peek() {
        return this.dataStore[this.top - 1]
    }

    function pop() {
        --this.stackSize
        return this.dataStore[--this.top]
    }

    function clear() {
        this.top = 0;
        this.stackSize = 0;
    }

    function length() {
        return this.stackSize
    }

    // // test stack
    // var s = new Stack();
    // s.push('David');
    // console.log('length'+s.stackSize)

    // 用栈实现数制间的相互转换
    function mulBase(num, base) {
        var s = new Stack();
        do {
            s.push(num % base);
            num = Math.floor(num /= base);
        } while(num > 0);
        var converted = '';
        while(s.length() > 0){
            converted += s.pop()
        }
        return converted;
    }

    // console.log(mulBase(10,2))

     // 用数组实现数制间的相互转换
     function mulBaseArr(num, base) {
        // var s = new Stack();
        var arr = []
        do {
            arr.push(num % base);
            num = Math.floor(num /= base);
        } while(num > 0);
        var converted = '';
        arr.reverse().forEach(item => {
            converted += item;
        })
        return converted;
    }
    console.log(mulBaseArr(22,2))

})();
// 队列类的实现
(function() {
    function Queue() {
        this.dataStore = [];
        this.enqueue =enqueue;//入队
        this.dequeue = dequeue;//出队
        this.front = front;//读取队首元素
        this.back = back;//读取队尾元素
        this.toString = toString;//转换成字符串
        this.empty = empty;//队列是否为空
    }

    function enqueue(element) {
        this.dataStore.push(element);
    }

    function dequeue() {
        return this.dataStore.shift();//删除并返回第一个元素
    }

    function front() {
        return this.dataStore[0];//返回第一个元素
    }

    function back() {
        return this.dataStore[this.dataStore.length -1]
    }

    function toString() {
        var retStr = "";
        for( var i = 0; i< this.dataStore.length;++i) {
            retStr += this.dataStore[i] + '\n'
        }
        return retStr;
    }

    function empty() {
        if(this.dataStore.length == 0) {
            return true;
        }else{
            return false
        }
    }


    // 使用队列：方块舞的舞伴分配问题
    // 舞者信息存储在一个Dancer对象中：
    // function Dancer(name, sex) {
    //     this.name = name;
    //     this.sex = sex;
    // }



})();

// 列表类的实现
(function(){
    // 实现列表类数据结构
    function List() {
        this.listSize = 0;//列表元素的个数
        this.pos = 0;//列表的当前位置
        this.dataStore = [];//初始化一个空数组来存储列表数据
        this.length = length;//返回列表中元素的个数
        this.clear = clear;//清空列表中的所有元素
        this.find = find;
        this.toString = toString;//返回列表的字符串形式
        this.getElement = getElement;//返回当前位置的元素
        this.insert = inser;//在现有元素后插入新元素
        this.append = append;//在列表的末尾添加新元素
        this.remove = remove;//从列表中删除数据
        this.front = front; //将列表的当前位置移动到第一个元素
        this.end = end;//将列表的当前位置移动到最后一个元素
        this.prev = prev;//将当前位置后移一位
        this.next = next;//将当前位置前移一位
        this.hasNext = hasNext;//判断后一位
        this.hasPreve = hasPreve;//判断前一位
        this.currPos = currPos;//返回列表的当前位置
        this.moveTo = moveTo;//将当前位置移动到指定位置
        this.contains = contains;
    }

    // 给列表添加元素
    function append(element) {
        this.dataStore[this.listSize++] = element;
    }

    // 从列表中删除元素
    // 先查找
    function find(element) {
        for(let i = 0;i<this.dataStore.length; ++i) {
            if(this.dataStore[i] == element) {
                return i
            }
        }
        return -1
    }

    // 再移除
    function remove(element) {
        var foundAt = this.find(element);
        if(foundAt > -1) {
            this.dataStore.splice(foundAt,1);
            --this.listSize;
            return true
        }
        return false
    }

    // 返回列表多少个元素
    function length() {
        return this.listSize;
    }

    // 显示列表中的元素
    function toString() {
        return this.dataStore;
    }

    // 向列表中插入一个元素
    function inser(element, after) {
        var insertPos = this.find(after);
        if(insertPos > -1) {
            this.dataStore.splice(insertPos+1,0,element);
            ++this.listSize;
            return true
        }
        return false
    }

    // 清空列表中所有的元素
    function clear() {
        delete this.dataStore;
        this.dataStore.length = 0;
        this.listSize = this.pos =0
    }
     
    // 判定给定值是否在列表中

    function contains(element) {
        for(let i =0;i <this.listSize; ++i) {
            if(this.dataStore[i] == element) {
                return true
            }
        }
        return false
    }

    // 最后一组方法，允许用户在列表上自由移动，最后一个getElement()返回列表的当前元素。

    function front() {
        this.pos = 0;
    }

    function end() {
        this.pos = this.listSize - 1;
    }

    function prev() {
        --this.pos;
    }

    function next() {
        if(this.pos < this.listSize) {
            ++this.pos;
        }
    }

    function currPos() {
        return this.pos
    }

    function moveTo(position) {
        this.pos = position
    }

    function getElement() {
        return this.dataStore[this.pos];
    }

    function hasNext() {
        return this.pos<this.listSize;
    }

    function hasPreve() {
        return this.pos >=0;
    }


    // 列表的使用：书籍列表
    var books = new List();
    // booksArrObj是TextToJson文件生成的对象数组，给列表添加书籍名称
    booksArrObj.forEach((item) => {
        books.append(item.name)
    })
    
    // 使用迭代器访问列表
    // 从前往后遍历列表
    for(books.front();books.hasNext();books.next()) {
    console.log(books.getElement())
    }
    // 从后往前遍历列表
    for(books.end();books.hasPreve();books.prev()) {
    console.log(books.getElement())
    }
    
})();

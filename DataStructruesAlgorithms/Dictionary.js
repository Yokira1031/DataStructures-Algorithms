// 字典类的实现
(function(){
    function Dictionary() {
        this.datastore = new Array();
        this.add = add;
        this.find = find;
        this.remove = remove;
        this.showAll = showAll;
    }
    function add(key, value) {
        this.datastore[key] = value;
    }
    function find(key) {
        return this.datastore[key];
    }
    function remove(key) {
        delete this.datastore[key];
    }
    function showAll() {
        // var datakeys = Array.prototype.slice.call(object.keys(this.datastore))
        // for(var key in datakeys) {
        //     console.log(datakeys[key] + '->'+this.datastore[datakeys[key]])
        // }
        console.log(this.datastore)
    }

    var pbook = new Dictionary();
    pbook.add('Mike','1');
    pbook.add('David','2');
    pbook.add('Cynthia','3');
    pbook.showAll()

    var arr  = []
    arr[1] = '123'
    console.log(arr[1])

})();
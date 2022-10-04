// 链表类的定义
(function(){
    // Node类
    function Node(element) {
        this.element = element;
        this.next = null;
    }

    // 单链表类
    function LList() {
        this.head = new Node('head');
        this.find = find;
        this.insert = insert;
        this.display = display;
        this.findPrevious = findPrevious;
        this.remove = remove;
    }

    function findPrevious(item) {
        var currNode = this.head;
        while(!(currNode.next == null) && (currNode.next.element != item)){
            currNode = currNode.next;
        }
        return currNode;
    }

    function remove(item) {
        var prevNode = this.findPrevious(item);
        if(!(prevNode.next == null)){
            prevNode.next = prevNode.next.next;
        }
    }

    function display() {
        var currNode = this.head;
        while(!(currNode.next == null)) {
            console.log(currNode.element + '/n');
            currNode = currNode.next;
        }
    }

    function find(item) {
        var currNode = this.head;
        while(currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    function insert(newElement, item){
        var newNode = new Node(newElement);
        var currNode = find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    }



})();
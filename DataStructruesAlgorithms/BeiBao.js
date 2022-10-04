(function () {
    function max(a,b){
        return (a>b) ? a: b;
    }
    function knapsack(capacity, size, value, n) {
        if( n == 0 || capacity ==0) {
            return 0;
        }
        if(size[n-1]>capacity) {
            return knapsack(capacity, size, value, n-1);
        } else {
            return max(value[n-1]+knapsack(capacity -size[n-1],size,value,n-1), knapsack(capacity,size,value,n-1));
        }
    }
    // 保险箱中有5件物品，它们的尺寸分别是3、4、7、8、9，而它们的价值分别是4、5、10、11、13，且背包的容积为16，那么恰当的解决方案是选取第三件物品和第五件物品，他们的总尺寸是16，总价值是23.
    var value = [4, 5, 10, 11,13];//5件物品的价值
    var size = [3,4,7,8,9];
    var capacity = 16;
    var n = 5;
    console.log(knapsack(capacity, size, value, n))
})();
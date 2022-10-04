// export default {booksJson}
// (function(){
    var books = "1.张爱玲《倾城之恋》2.马格利特.杜拉斯《情⼈》3.考林.麦卡洛《荆棘鸟》4.村上春树《挪威的森林》5.渡边淳⼀《失乐园》《男⼈这东西》6.钱钟书《围城》(婚姻的镜⼦)7.劳伦斯《虹》《爱恋中的⼥⼈》《查太莱夫⼈的情⼈》8.泰⼽尔《飞鸟集》《草叶集》9.塞林格《麦⽥⾥的守望者》10.⽶兰.昆德拉《⽣命中不能承受之轻》《缓慢》11.西蒙娜.德.波伏娃《第⼆性》12.雪⼉.海蒂《性学报告》13.德克旭贝⾥《⼩王⼦》"

    var booksArr = books.split('');
    var booksArrObj = []
    var booksAuthorPos = []//作者的坐标位置，成双前后坐标位置
    var booksNamePos = []//书籍的坐标位置，成双前后坐标位置
    for(let i = 0;i<booksArr.length;i++) {
        if(booksArr[i] === '.' && Number(booksArr[i-1])>= 0) {
            booksAuthorPos.push(i);
        }
        //如果字符串数组当前位置值为‘《’,并且当前作者坐标位置对应的字符串数组值为‘.‘那么记录下作者名字的最后位置，记录下书籍的开始位置
        if(booksArr[i] === '《' && booksArr[booksAuthorPos[booksAuthorPos.length-1]] === '.') {
            booksAuthorPos.push(i-2);
            booksNamePos.push(i-1);
        }
        // 记录书籍的结束位置
        if(booksArr[i] === '》' && booksArr[booksNamePos[booksNamePos.length-1]+1] === '《') {
            booksNamePos.push(i-1);
        }
    }
    for(let i =0;i < booksNamePos.length;i+=2) {
        let a1,a2 = 0;
        let b1,b2 =0;
        let name = '';
        
        a1 = booksAuthorPos[i]+1;
        a2 = booksAuthorPos[i+1]+1;
        b1 = booksNamePos[i]+1;
        b2 = booksNamePos[i+1]+2;
        name = books.slice(a1,a2);
        book = books.slice(b1,b2);
        // booksArrObj.push({[author]:book})
        booksArrObj.push({name:book})
    }

    var booksJson = JSON.stringify(booksArrObj);

    // export {booksJson,booksArrObj}
// })();
// console.log(booksJson)

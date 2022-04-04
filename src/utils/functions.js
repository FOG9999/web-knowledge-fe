const sortArray = (arr) => {
    let outputArr = [];
    if(arr.length > 1){
        // find head and tail
        let head, tail;
        arr.forEach((ele, index) => {
            if(!ele.previous){
                head = ele;
                outputArr.push(head);
            }
            if(!ele.next){
                tail = ele;
            }
        })   
        // chaining element to output array
        
    }
    else return arr;    
}
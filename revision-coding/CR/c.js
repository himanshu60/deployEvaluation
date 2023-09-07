function find(arr){
    let a=arr[0]
    let b=arr[1]
    let c=arr[2]
    let n=arr[3]

    let sum=a+b+c+n;
    if(sum%3!==0){
        console.log("No")
    }
    else{
        let val=sum/3;
        if(a>val||b>val||c>val){
            console.log("No");
            return;
        }else{
            console.log("yes")
        }
    }
}
find([10,10,5,20])
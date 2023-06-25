function resolveAfter2Seconds(){
    return newPromise(resolve=>{
        setTimeout(()=>{
            resolve('resolved');
        }, 2000);
    });
}
console.log('start');
setTimeout(() => {
    console.log('timeout');
}, 100000);
console.log('End');
//output:
//start
//end
//timeout (after 1 sec)
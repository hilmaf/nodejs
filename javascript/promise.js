const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition) {
        resolve('성공');
    } else {
        resolve('실패');
    }
});

promise
.then((message) => {
    console.log(message); // 성공 resolve 시 실행
})
.catch((error) => {
    console.error(error); // 실패 reject 시 실행
});

// 여러 개의 Promise 연달아서 사용 가능
promise
.then((message) => {
    return new Promise((resolve, reject) => {
        resolve(message);
    });
})
.then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
        resolve(message2);
    });
})
.then((message3) => {
    console.loge(message3);
})
.catch((error) => {
    console.error(error);
});
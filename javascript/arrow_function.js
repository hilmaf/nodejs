// 함수 선언문
function add1(x, y) {
    return x + y;
}

// 화살표 함수
const add2 = (x, y) => {
    return x + y;
}

// 화살표 함수 사용 시 return 생략 가능
const add3 = (x, y) => x + y;

// 화살표 함수 사용 시 return할 부분을 소괄호로 묶어 표현할 수 있음
const add4 = (x, y) => (x + y);

console.log(add1(1, 3));
console.log(add2(1, 3));
console.log(add3(1, 3));
console.log(add4(1, 3));

/////////////////////////////////////

// 함수 선언문
function not1(x) {
    return !x;
}

// 화살표 함수 사용 시 파라미터가 1개인 경우 괄호 생략 가능
const not2 = x => !x;

console.log(not1(true));
console.log(not2(true));

/////////////////////////////////////
// 화살표 함수 사용 시 this 바인드 방식에 차이가 생김

// 기존의 함수 선언문
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        var that = this; // this는 relationship1을 가리킨다
        this.friends.forEach(function(friend) { // forEach문 내부에 function을 사용하면, this를 썼을 때 스코프가 가리키는 함수가 forEach 내부의 함수가 되기 때문에 그 밖의 함수를 that 변수에 담아서 사용했음
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();

const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => { // 하지만 화살표 함수 사용 시에는 바깥 스코프인 logFriends()의 this를 그대로 사용할 수 있다
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();
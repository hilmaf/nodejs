let sayNode = function() {
    console.log('Node');
}

let es = 'ES';

const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es+6]: 'Fantastic',
}

newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);
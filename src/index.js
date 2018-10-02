const createEnumerableProperty = (prop) => prop;
const createNotEnumerableProperty = (prop) => Symbol(prop);

// createProtoMagicObject
const createProtoMagicObject = () => {
    function obj() {}
    obj.prototype = obj.__proto__;

    return obj;
};

// incrementor
const incrementor = () => incrementor.next();

incrementor._value = 0;
incrementor.next = () => {
    incrementor._value++;
    return incrementor.next;
}
incrementor.next.valueOf = () => incrementor._value;

// asyncIncrementor
const asyncIncrementor = () => new Promise(resolve => {
    resolve(++asyncIncrementor._value);
});

asyncIncrementor._value = 0;

// createIncrementer
const createIncrementer = () => function* (value = 0) {
    while (true) yield ++value;
}();

// return {
//     _value: 0,

//     [Symbol.iterator]() {
//         return this;
//     },
//     next() {
//         this._value++;
//         return this;
//     }
// }


// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = arg => new Promise(resolve => {
    setTimeout(resolve, 1000, arg);
});

const getDeepPropertiesCount = obj => {
    let propsCount = 0,
        temp = obj;

    while (Object.keys(temp).length) {
        for (let key in temp) {
            let length = Object.keys(temp[key]).length;

            if (length) {
                propsCount += length + 1;
                temp = temp[key][key];

                break;
            }
        }
    }

    return propsCount;
};

const createSerializedObject = () => new String();
const sortByProto = arr => arr.sort();

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
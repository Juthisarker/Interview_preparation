let originalValue = {
    name: 'halu',
    address:{
        city:'bangalore',
        state:'karnataka'
    }
}

let copyValue = originalValue;

copyValue = {
    ...copyValue,
    name: 'nope',
    address: {
        ...copyValue.address,
        city: 'mumbai'
    }
}

console.log(originalValue);
console.log(copyValue);
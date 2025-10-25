//https://www.testdome.com/tests/javascript-node-js-online-test/111


function ensure(value) {
    if( value === undefined) {
        throw new Error('no argument');
    }
    return value;
}

function removeProperty(obj, prop){
     if(obj.hasOwnProperty(prop)) {
        delete obj[prop];
        return true;
     }

     return false;
}



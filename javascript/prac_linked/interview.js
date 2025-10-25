var conversation = {
    'John': {
        1: 'Test message 1',
        2: 'Test message 2',
        'Reply': {
            3: 'Test message 3',
            4: 'Test message 4'
        }
    },
    'Jack': {
        5: 'Test message 5',
        6: 'Test message 6'
    }
};


function keyValuePrinter(obj) {
    for (let key in obj) {
      if (typeof obj[key] !== "object") {
        console.log( key + " : " + obj[key] );
      } else {
        keyValuePrinter(obj[key]);
      }
    }
  }

  keyValuePrinter(conversation);

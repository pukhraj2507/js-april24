// Immediately Invoked Function Expressions (IIFE) 

(function one(){              // nammed IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {                // Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Lorem")

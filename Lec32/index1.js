// What is the difference between `let`, `var`, and `const`?

// let Late, ma'am. जो भी variable declare करेंगे, उसे update कर सकते हैं या उसे change कर सकते हैं. और एक नाम के दो variable बना सकते हैं `let` में। 

// Var में variable बना सकते हैं, लेकिन एक नाम के दो-दो variable नहीं बना सकते। बाकी सब function late के जैसे use होगा। 

// `const` में जो एक बार declare कर दिया गया, वो दोबारा update नहीं किया जा सकता है, या फिर एक से दो variable नहीं बनाए जा सकते हैं? 

let number =10;
number = 20 ;
const num = 40;

console.log("This is a number =",number);
console.log("This is a num = ", num);
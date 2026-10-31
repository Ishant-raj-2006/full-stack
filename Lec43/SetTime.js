// `setTimeout` में बस यह एक बार चलेगा। आप जितना second का gap देना चाहते हो, यानी कि आप जब भी इसे start करोगे, तो उतना second wait करेगा, then वो काम start करेगा और एक बार ही करेगा। यह infinite loop में नहीं होता है। 
setTimeout(() => {
    console.log("Hello Ishu")
},2000)
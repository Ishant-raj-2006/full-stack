// इस case में आप जब भी कुछ कराना चाहते हो, वो काम करेगा, लेकिन वो interval (यानी कि 2,000 ms से, यानी कि 2 second बाद) repeatedly करता रहेगा infinite time तक. 
setInterval(() => {
    console.log("Hello Ishant Raj")
}, 2000)
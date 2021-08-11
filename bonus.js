for (let i = 0; i <= 50; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Foo" +"Buzz")
    }
    else if (i % 3 == 0) {
        console.log("Foo");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
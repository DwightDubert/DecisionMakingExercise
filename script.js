let randomNum = Math.floor(Math.random()*5)+1

if (randomNum >= 4){
    console.log("GREATER THAN OR EQUAL TO 4");
} else if ((randomNum == 2) || (randomNum == 3)){
    console.log("EQUAL TO 2 OR 3")
} else {
    console.log(" is 1");
}

if (randomNum != 3){
    console.log("NOT 3")
}

if ((randomNum != 3) && (randomNum != 5)) {
    console.log("NOT 3 and NOT 5");
}

if ((randomNum == 2) || (randomNum == 4)) {
    console.log("IS 2 OR IS 4")
}
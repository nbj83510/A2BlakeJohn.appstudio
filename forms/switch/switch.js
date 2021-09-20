//This sets the variables

let name = prompt("Enter your first name.")
let letters = prompt("Enter the state you live in (i.e. NE or FL).")
let fahren = prompt("Enter the temperature in Fahrenheit today.")
let sentence = ["wear a warm coat, hat, scarf, and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat, and gloves. Maybe a scarf too."]

//This tells the person what to wear based off of temp

switch (true) {
case(fahren <= 32):
  console.log(`${name}, ${messages[0]}`)
    break
case (fahren >= 32 && fahren <= 50 && letters == 'NE'):
  console.log(`${name}, ${messages[1]}`)
    break
case (fahren >= 32 && fahren <= 50 && letters == 'FL'):
  console.log(`${name}, ${messages[2]}`)
    break
case (fahren >= 50 && fahren <= 70):
  console.log(`${name}, ${messages[3]}`)
    break
default:
  console.log(`${name}, have a nice day`)

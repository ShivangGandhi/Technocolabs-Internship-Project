//The value saved to kelvin will stay constant
let kelvin = 293;

//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273;

//Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;

//To round the conversion
fahrenheit = Math.floor(fahrenheit);

//celsius to newton scale
let newton = celsius * (33/100);

//To round the conversion
newton = Math.floor(newton);

console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");
console.log("The temperature is " + newton + " degrees Newton.");

//The temperature is -460 degrees Fahrenheit. at 0 degree kelvin.

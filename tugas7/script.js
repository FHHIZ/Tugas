document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').textContent = 'Latihan JavaScript Selesai';
});

let name = "John";
const age = "30";

document.getElementById('output0').innerHTML = `
    <p>Name: ${name}</p>
    <p>Age: ${age}</p>
`;

function greet(name) {
    return "Hello, " + name;
}

document.getElementById('output1').innerHTML = greet(name);

let fruit = ["Apple", "Banana", "Mango"];
let fruitbasket = document.getElementById("output2");
for (let i = 0; i < fruit.length; i++) {
    let threefruit = document.createElement("p");
    threefruit.textContent = fruit[i];
    fruitbasket.appendChild(threefruit);
}

function cekNilai() {
    var number = parseInt(document.getElementById('userinput').value);
    var hasil;
    if (number > 10) {
        hasil = "Lebih besar dari 10";
    } else if (number === 10) { 
        hasil = "Sama dengan 10";
    } else {
        hasil = "Lebih kecil dari 10";
    }
    document.getElementById('hasil').innerHTML = hasil;
}

function calculateSquare(x, y) {
    var z = x * y
    return z
}
document.getElementById("output3").innerHTML = calculateSquare(2, 2);
let arrowFunction = (a, b) => a * b;
document.getElementById("output4").innerHTML = arrowFunction(4, 4);

let students = ["Alice", "Bob", "Charlie"]; 
students.push("Kevin");
let output = "";

students.forEach((item, index) => {
    output += index + "; " + item + "<br>";
});
document.getElementById("output5").innerHTML = output;

let car = {Brand: "Toyota", Model: "Corolla", Year: 2020};

let garage = "";

for (let key in car) {
    garage += key + ": " + car[key] + "<br>";
}

document.getElementById("output6").innerHTML = garage;

let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2019},
    {brand: "Ford", model: "Mustang", year: 2021},
    {brand: "Chevrolet", model: "Malibu", year: 2018}
];

let cargarage = "";

cars.forEach((car, index) => {
    cargarage += "Mobil ke-" + (index + 1) + ": " + car.brand + " " + car.model + " (" + car.year + ")<br>";
});

document.getElementById("output7").innerHTML = cargarage;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').textContent = 'Latihan JavaScript Selesai';
});

let name = "John";
const age = "30";

const output = document.getElementById('output').innerHTML = `
    <p>Name: ${name}</p>
    <p>Age: ${age}</p>
`;

let fruit = ["Apple", "Banana", "Manggo"]; 
let fruitbasket = document.getElementById("output")
for (let i = 0; i < fruit.length; i++) {
    let threefruit = document.createElement("p")
}

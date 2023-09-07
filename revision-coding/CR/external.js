const fruits = [
    { name: "Apple", color: "Red", price: 0.99 },
    { name: "Banana", color: "Yellow", price: 0.25 },
    { name: "Orange", color: "Orange", price: 0.50 },
    { name: "Grapes", color: "Purple", price: 2.99 }
  ];
  
  // Iterate through the fruits array using forEach method
  fruits.forEach((fruit) => {
    const name = fruit.name;
    const color = fruit.color;
    const price=fruit.price;
    
    console.log("Fruit:", name);
    console.log("Color:", color);
    console.log("Price:", price);
    
  });
  
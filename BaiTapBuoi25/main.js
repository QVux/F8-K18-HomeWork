const products = [
    { id: 1, name: 'iPhone', price: 2000 },
    { id: 2, name: 'Samsung', price: 1500 },
    { id: 3, name: 'Xiaomi', price: 1000 },
    { id: 4, name: 'Oppo', price: 1200 }
]

const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 }
        ]
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 }
        ]
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 }
        ]
    }
]

const revenues = [];

for (let i = 0; i < products.length; i++) {
    revenues.push({
        id: products[i].id,
        revenue: 0
    });
}

for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < orders[i].items.length; j++) {
        for (let k = 0; k < products.length; k++) {
            if (orders[i].items[j].productId === products[k].id) {
                revenues[k].revenue +=
                    orders[i].items[j].quantity * products[k].price;
                break;
            }
        }
    }
}

let maxRevenue = 0;
let maxProductId = null;

for (let i = 0; i < revenues.length; i++) {
    if (revenues[i].revenue > maxRevenue) {
        maxRevenue = revenues[i].revenue;
        maxProductId = revenues[i].id;
    }
}

let productName = null;

for (let i = 0; i < products.length; i++) {
    if (products[i].id === maxProductId) {
        productName = products[i].name;
        break;
    }
}

console.log("Revenue per product:", revenues);
console.log("The product with the highest revenue:", productName);
console.log("Revenue:", maxRevenue);
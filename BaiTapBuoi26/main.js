const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
]

const orders = []
let nextOrderId = 1

const createOrder = (productId, orderQuantity) => {
    if (productId == null || orderQuantity == null || orderQuantity <= 0) {
        return { error: "Invalid quantity or productId" }
    }

    const product = products.find(p => p.id === productId)
    if (!product) {
        return { error: "Product not found" }
    }

    if (product.remaining < orderQuantity) {
        return { error: "out of stock" }
    }

    const order = {
        id: nextOrderId++,
        productId,
        quantity: orderQuantity
    }

    product.remaining -= orderQuantity
    orders.push(order)

    return { data: order }
}

const updateOrder = (orderId, quantity) => {
    if (orderId == null || quantity == null || quantity <= 0) {
        return { error: "Invalid orderId or quantity" }
    }

    const order = orders.find(o => o.id === orderId)
    if (!order) {
        return { error: "Not found" }
    }

    const product = products.find(p => p.id === order.productId)
    if (!product) {
        return { error: "Product not found" }
    }

    const diff = quantity - order.quantity

    if (diff > 0 && product.remaining < diff) {
        return { error: "out of stock" }
    }

    product.remaining -= diff
    order.quantity = quantity

    return { data: order }
}

const deleteOrder = (orderId) => {
    if (orderId == null) {
        return { error: "Invalid orderId" }
    }

    const orderIndex = orders.findIndex(o => o.id === orderId)
    if (orderIndex === -1) {
        return { error: "Not found" }
    }

    const order = orders[orderIndex]
    const product = products.find(p => p.id === order.productId)

    if (product) {
        product.remaining += order.quantity
    }

    orders.splice(orderIndex, 1)

    return { data: "Deleted successfully" }
}

console.log(createOrder(1, 5))
console.log(createOrder(1, -3))
console.log(createOrder(10, 2))

console.log("====== UPDATE ======")
console.log(updateOrder(1, null))
console.log(updateOrder(1, 100))
console.log(updateOrder(1, 8))

console.log("====== DELETE ======")
console.log(deleteOrder(1))
console.log(deleteOrder(99))

console.log("====== FINAL DATA ======")
console.log("Orders:", orders)
console.log("Products:", products)
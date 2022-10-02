const products = [
    { id: 1, name: 'Mouse', price: '10', pictureUrl: 'https://ibb.co/p2Ww1y7', category: 'Accesorios Electronicos'},
    { id: 2, name: 'Luces LED', price: '20', pictureUrl: 'https://ibb.co/vBJH5gH', category: 'Accesorios Electronicos'},
    { id: 3, name: 'McBook', price: '30', pictureUrl: 'https://ibb.co/jVNJv4s', category: 'Compuradoras' },
    { id: 4, name: 'Parlante', price: '40', pictureUrl: 'https://ibb.co/txCGSzc', category: 'Accesorios Electronicos' },
]

export const getProducts = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProduct = (id) => {

    const getItem = products.find(getIt => getIt.id === id)

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getItem)
        },)
    })
}

export const getProductsByCategory = (category) => {

    const getItem = products.filter(getIt => getIt.category === category)

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getItem)
        },)
    })
}
const products = [
    { id: '1', stock: 15, name: 'Mouse', price: 10, pictureUrl: 'https://i.ibb.co/2q8hFN9/mouse.jpg', category: 'Mouse'},
    { id: '2', stock: 25, name: 'Luces LED', price: 20, pictureUrl: 'https://i.ibb.co/fSC2RB2/lucesled.jpg', category: 'Iluminacion'},
    { id: '3', stock: 35, name: 'McBook', price: 30, pictureUrl: 'https://i.ibb.co/rbjdGyN/mcbook.jpg', category: 'Computadoras' },
    { id: '4', stock: 45, name: 'Parlante', price: 40, pictureUrl: 'https://i.ibb.co/LJpFMr6/parlante.jpg', category: 'Sonido' },
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
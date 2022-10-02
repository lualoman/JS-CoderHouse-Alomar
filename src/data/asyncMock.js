const products = [
    { id: 1, name: 'Mouse', price: '10', pictureUrl: '', category: ''},
    { id: 2, name: 'Teclado', price: '20', pictureUrl: '', category: ''},
    { id: 3, name: 'McBook', price: '30', pictureUrl: '', category: '' },
    { id: 4, name: 'Parlante', price: '40', pictureUrl: '', category: '' },
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
const products = [
    { id: 1, name: 'Mouse', price: '10', pictureUrl: '' },
    { id: 2, name: 'Teclado', price: '20', pictureUrl: '' },
    { id: 3, name: 'McBook', price: '30', pictureUrl: '' },
    { id: 4, name: 'Parlante', price: '40', pictureUrl: '' },
]

export const getProducts = (id) => {

    const getItem = products.find(getIt => getIt.id === 'products.id')

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getItem)
        }, 2000)
    })
}
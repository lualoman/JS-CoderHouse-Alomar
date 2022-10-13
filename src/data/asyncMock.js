const products = [
    { id: '1', stock: 15, name: 'Mouse', price: 10, pictureUrl: 'https://i.ibb.co/2q8hFN9/mouse.jpg', category: 'Mouse', description: 'El Magic Mouse es mejor, más ergonómico, y trae esa superficie multitáctil que abre decenas de nuevas posibles funciones a algo tan simple como era el ratón.'},
    { id: '2', stock: 25, name: 'Luces LED', price: 20, pictureUrl: 'https://i.ibb.co/fSC2RB2/lucesled.jpg', category: 'Iluminacion',  description: 'Conectalas por bluetooth para que combinen con tu musica favorita. Tambien podras controlarlas desde tu smartphone! Adaptalas a todos tus espacios, ya que son aptas para interiores o exteriores.'},
    { id: '3', stock: 35, name: 'McBook', price: 30, pictureUrl: 'https://i.ibb.co/rbjdGyN/mcbook.jpg', category: 'Computadoras',  description: 'La notebook más delgada y ligera de Apple. Termina todos tus proyectos mucho más rápido, disfruta de apps y juegos con gráficos avanzados. Portátil como siempre, más poderosa que nunca.' },
    { id: '4', stock: 45, name: 'Parlante', price: 40, pictureUrl: 'https://i.ibb.co/LJpFMr6/parlante.jpg', category: 'Sonido',  description: 'Altavoz Apple con graves excelentes, una calidad de sonido superior y funciones mejoradas Es fácil y rápido de configurar; los micrófonos Siri de largo alcance lo convierten en un producto esencial para cada hogar.' },
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
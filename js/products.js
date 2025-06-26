// Datos de productos
const productsData = {
    men: [
        {
            id: 'm1',
            name: 'Blue de Chanel',
            brand: 'Chanel',
            price: 404955,
            category: 'elegant',
            description: 'Una fragancia elegante y sofisticada con notas amaderadas y aromáticas.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm2',
            name: 'Sauvage',
            brand: 'Dior',
            price: 425250,
            category: 'elegant',
            description: 'Fragancia masculina potente con notas de bergamota y pimienta.',
            image: 'images/products/sauvage-custom.svg'
        },
        {
            id: 'm3',
            name: 'Acqua di Gio',
            brand: 'Giorgio Armani',
            price: 354375,
            category: 'casual',
            description: 'Aroma fresco y marino inspirado en la belleza de Pantelleria.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm4',
            name: 'Le Male',
            brand: 'Jean Paul Gaultier',
            price: 296955,
            category: 'casual',
            description: 'Fragancia oriental con notas de lavanda, vainilla y menta.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm5',
            name: 'Invictus',
            brand: 'Paco Rabanne',
            price: 325125,
            category: 'sport',
            description: 'Fragancia fresca y deportiva con notas de laurel y madera de guayaco.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm6',
            name: 'Cool Water',
            brand: 'Davidoff',
            price: 204750,
            category: 'sport',
            description: 'Fragancia fresca y acuática con notas de menta y lavanda.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm7',
            name: 'One Million',
            brand: 'Paco Rabanne',
            price: 359955,
            category: 'elegant',
            description: 'Fragancia especiada y frutal con un toque de cuero y sangre de mandarina.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm8',
            name: 'Boss Bottled',
            brand: 'Hugo Boss',
            price: 309375,
            category: 'casual',
            description: 'Fragancia elegante con notas de manzana, canela y sándalo.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm9',
            name: 'Versace Eros',
            brand: 'Versace',
            price: 371250,
            category: 'elegant',
            description: 'Fragancia sensual y potente con notas de menta, manzana verde y vainilla.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm10',
            name: 'Terre d\'Hermès',
            brand: 'Hermès',
            price: 430875,
            category: 'elegant',
            description: 'Fragancia terrosa y mineral con notas de naranja, pimienta y vetiver.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm11',
            name: 'Eternity',
            brand: 'Calvin Klein',
            price: 269955,
            category: 'casual',
            description: 'Fragancia aromática con notas de lavanda, jazmín y sándalo.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm12',
            name: 'Polo Blue',
            brand: 'Ralph Lauren',
            price: 303750,
            category: 'sport',
            description: 'Fragancia fresca y deportiva con notas acuáticas y cítricas.',
            image: 'images/products/men-placeholder.svg'
        }
    ],
    women: [
        {
            id: 'w1',
            name: 'Lattafa Yara eau de parfum 100 ml',
            brand: 'Lattafa',
            price: 235000,
            category: 'oriental',
            description: 'Una fragancia oriental exquisita con notas de jazmín, rosa damascena y ámbar. Ideal para ocasiones especiales.',
            image: 'images/products/lattafa-yara.webp'
        },
        {
        id: 'w2',
        name: 'Lattafa Yara Candy Edp 100 ml',
        brand: 'Lattafa',
        price: 270000,
        category: 'floral gourmand',
        description: 'Una fragancia floral gourmand con notas de flores blancas, frutos rojos y vainilla dulce. Ideal para un toque femenino y encantador.',
        image: 'images/products/Lattafa-Yara-Candy.webp'
        },
        {
            id: 'w3',
            name: 'La Vie Est Belle',
            brand: 'Lancôme',
            price: 404955,
            category: 'frutal',
            description: 'Fragancia gourmand con notas de grosella negra, pera y praliné.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w4',
            name: 'Good Girl',
            brand: 'Carolina Herrera',
            price: 415125,
            category: 'oriental',
            description: 'Fragancia oriental floral con notas de almendra, café y cacao.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w5',
            name: 'Black Opium',
            brand: 'Yves Saint Laurent',
            price: 429750,
            category: 'oriental',
            description: 'Fragancia adictiva con notas de café, vainilla y flores blancas.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w6',
            name: 'Daisy',
            brand: 'Marc Jacobs',
            price: 328455,
            category: 'floral',
            description: 'Fragancia fresca y floral con notas de violeta, jazmín y madera.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w7',
            name: 'Chance',
            brand: 'Chanel',
            price: 397125,
            category: 'floral',
            description: 'Fragancia floral con notas de pimienta rosa, jazmín y pachulí.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w8',
            name: 'Miss Dior',
            brand: 'Dior',
            price: 448875,
            category: 'frutal',
            description: 'Fragancia floral y afrutada con notas de mandarina, rosa y pachulí.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w9',
            name: 'Flowerbomb',
            brand: 'Viktor & Rolf',
            price: 464625,
            category: 'floral',
            description: 'Fragancia explosiva de flores con notas de jazmín, rosa y orquídea.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w10',
            name: 'Sí',
            brand: 'Giorgio Armani',
            price: 438750,
            category: 'frutal',
            description: 'Fragancia elegante con notas de grosella negra, rosa y vainilla.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w11',
            name: 'Bloom',
            brand: 'Gucci',
            price: 472455,
            category: 'floral',
            description: 'Fragancia floral intensa con notas de jazmín, rangoon creeper y nardo.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w12',
            name: 'Light Blue',
            brand: 'Dolce & Gabbana',
            price: 385875,
            category: 'frutal',
            description: 'Fragancia fresca y mediterránea con notas de manzana, cedro y ámbar.',
            image: 'images/products/women-placeholder.svg'
        }
    ],
    featured: [
        {
            id: 'f1',
            name: 'Set Sauvage',
            brand: 'Dior',
            price: 562500,
            oldPrice: 675000,
            description: 'Set exclusivo que incluye Eau de Parfum 100ml y Aftershave 50ml.',
            image: 'images/products/set-placeholder.svg'
        },
        {
            id: 'f2',
            name: 'Set J\'adore',
            brand: 'Dior',
            price: 585000,
            oldPrice: 720000,
            description: 'Set de lujo con Eau de Parfum 100ml y loción corporal 75ml.',
            image: 'images/products/set-placeholder.svg'
        },
        {
            id: 'f3',
            name: 'Discovery Set Masculino',
            brand: 'Multi-marca',
            price: 292500,
            oldPrice: 405000,
            description: 'Colección de 5 miniaturas de las fragancias más populares para hombre.',
            image: 'images/products/set-placeholder.svg'
        },
        {
            id: 'f4',
            name: 'Set Good Girl',
            brand: 'Carolina Herrera',
            price: 517500,
            oldPrice: 630000,
            description: 'Set de lujo con Eau de Parfum 80ml y loción corporal 100ml.',
            image: 'images/products/set-placeholder.svg'
        },
        {
            id: 'f5',
            name: 'Discovery Set Femenino',
            brand: 'Multi-marca',
            price: 292500,
            oldPrice: 405000,
            description: 'Colección de 5 miniaturas de las fragancias más populares para mujer.',
            image: 'images/products/set-placeholder.svg'
        }
    ]
};

// Exportamos los datos para usarlos en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsData;
}

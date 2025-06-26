// Datos de productos
const productsData = {
    men: [
        {
            id: 'm1',
            name: 'Blue de Chanel',
            brand: 'Chanel',
            price: 89.99,
            category: 'elegant',
            description: 'Una fragancia elegante y sofisticada con notas amaderadas y aromáticas.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm2',
            name: 'Sauvage',
            brand: 'Dior',
            price: 94.50,
            category: 'elegant',
            description: 'Fragancia masculina potente con notas de bergamota y pimienta.',
            image: 'images/products/sauvage-custom.svg'
        },
        {
            id: 'm3',
            name: 'Acqua di Gio',
            brand: 'Giorgio Armani',
            price: 78.75,
            category: 'casual',
            description: 'Aroma fresco y marino inspirado en la belleza de Pantelleria.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm4',
            name: 'Le Male',
            brand: 'Jean Paul Gaultier',
            price: 65.99,
            category: 'casual',
            description: 'Fragancia oriental con notas de lavanda, vainilla y menta.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm5',
            name: 'Invictus',
            brand: 'Paco Rabanne',
            price: 72.25,
            category: 'sport',
            description: 'Fragancia fresca y deportiva con notas de laurel y madera de guayaco.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm6',
            name: 'Cool Water',
            brand: 'Davidoff',
            price: 45.50,
            category: 'sport',
            description: 'Fragancia fresca y acuática con notas de menta y lavanda.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm7',
            name: 'One Million',
            brand: 'Paco Rabanne',
            price: 79.99,
            category: 'elegant',
            description: 'Fragancia especiada y frutal con un toque de cuero y sangre de mandarina.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm8',
            name: 'Boss Bottled',
            brand: 'Hugo Boss',
            price: 68.75,
            category: 'casual',
            description: 'Fragancia elegante con notas de manzana, canela y sándalo.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm9',
            name: 'Versace Eros',
            brand: 'Versace',
            price: 82.50,
            category: 'elegant',
            description: 'Fragancia sensual y potente con notas de menta, manzana verde y vainilla.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm10',
            name: 'Terre d\'Hermès',
            brand: 'Hermès',
            price: 95.75,
            category: 'elegant',
            description: 'Fragancia terrosa y mineral con notas de naranja, pimienta y vetiver.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm11',
            name: 'Eternity',
            brand: 'Calvin Klein',
            price: 59.99,
            category: 'casual',
            description: 'Fragancia aromática con notas de lavanda, jazmín y sándalo.',
            image: 'images/products/men-placeholder.svg'
        },
        {
            id: 'm12',
            name: 'Polo Blue',
            brand: 'Ralph Lauren',
            price: 67.50,
            category: 'sport',
            description: 'Fragancia fresca y deportiva con notas acuáticas y cítricas.',
            image: 'images/products/men-placeholder.svg'
        }
    ],
    women: [
        {
            id: 'w1',
            name: 'Coco Mademoiselle',
            brand: 'Chanel',
            price: 105.50,
            category: 'oriental',
            description: 'Fragancia oriental y fresca con notas de naranja, jazmín y pachulí.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w2',
            name: 'J\'adore',
            brand: 'Dior',
            price: 98.75,
            category: 'floral',
            description: 'Fragancia floral sofisticada con notas de mandarina, jazmín y rosa.',
            image: 'images/products/jadore-custom.svg'
        },
        {
            id: 'w3',
            name: 'La Vie Est Belle',
            brand: 'Lancôme',
            price: 89.99,
            category: 'frutal',
            description: 'Fragancia gourmand con notas de grosella negra, pera y praliné.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w4',
            name: 'Good Girl',
            brand: 'Carolina Herrera',
            price: 92.25,
            category: 'oriental',
            description: 'Fragancia oriental floral con notas de almendra, café y cacao.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w5',
            name: 'Black Opium',
            brand: 'Yves Saint Laurent',
            price: 95.50,
            category: 'oriental',
            description: 'Fragancia adictiva con notas de café, vainilla y flores blancas.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w6',
            name: 'Daisy',
            brand: 'Marc Jacobs',
            price: 72.99,
            category: 'floral',
            description: 'Fragancia fresca y floral con notas de violeta, jazmín y madera.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w7',
            name: 'Chance',
            brand: 'Chanel',
            price: 88.25,
            category: 'floral',
            description: 'Fragancia floral con notas de pimienta rosa, jazmín y pachulí.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w8',
            name: 'Miss Dior',
            brand: 'Dior',
            price: 99.75,
            category: 'frutal',
            description: 'Fragancia floral y afrutada con notas de mandarina, rosa y pachulí.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w9',
            name: 'Flowerbomb',
            brand: 'Viktor & Rolf',
            price: 103.25,
            category: 'floral',
            description: 'Fragancia explosiva de flores con notas de jazmín, rosa y orquídea.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w10',
            name: 'Sí',
            brand: 'Giorgio Armani',
            price: 97.50,
            category: 'frutal',
            description: 'Fragancia elegante con notas de grosella negra, rosa y vainilla.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w11',
            name: 'Bloom',
            brand: 'Gucci',
            price: 104.99,
            category: 'floral',
            description: 'Fragancia floral intensa con notas de jazmín, rangoon creeper y nardo.',
            image: 'images/products/women-placeholder.svg'
        },
        {
            id: 'w12',
            name: 'Light Blue',
            brand: 'Dolce & Gabbana',
            price: 85.75,
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
            price: 125.00,
            oldPrice: 150.00,
            description: 'Set exclusivo que incluye Eau de Parfum 100ml y Aftershave 50ml.',
            image: 'images/products/set-placeholder.svg'
        },
        {
            id: 'f2',
            name: 'Set J\'adore',
            brand: 'Dior',
            price: 130.00,
            oldPrice: 160.00,
            description: 'Set de lujo con Eau de Parfum 100ml y loción corporal 75ml.',
            image: 'images/products/set-placeholder.svg'
        },
        {
            id: 'f3',
            name: 'Discovery Set Masculino',
            brand: 'Multi-marca',
            price: 65.00,
            oldPrice: 90.00,
            description: 'Colección de 5 miniaturas de las fragancias más populares para hombre.',
            image: 'images/products/set-placeholder.svg'
        },
        {
            id: 'f4',
            name: 'Set Good Girl',
            brand: 'Carolina Herrera',
            price: 115.00,
            oldPrice: 140.00,
            description: 'Set de lujo con Eau de Parfum 80ml y loción corporal 100ml.',
            image: 'images/products/set-placeholder.svg'
        },
        {
            id: 'f5',
            name: 'Discovery Set Femenino',
            brand: 'Multi-marca',
            price: 65.00,
            oldPrice: 90.00,
            description: 'Colección de 5 miniaturas de las fragancias más populares para mujer.',
            image: 'images/products/set-placeholder.svg'
        }
    ]
};

// Exportamos los datos para usarlos en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsData;
}

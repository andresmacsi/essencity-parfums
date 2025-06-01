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
            image: 'images/blue-chanel.jpg'
        },
        {
            id: 'm2',
            name: 'Sauvage',
            brand: 'Dior',
            price: 94.50,
            category: 'elegant',
            description: 'Fragancia masculina potente con notas de bergamota y pimienta.',
            image: 'images/sauvage.jpg'
        },
        {
            id: 'm3',
            name: 'Acqua di Gio',
            brand: 'Giorgio Armani',
            price: 78.75,
            category: 'casual',
            description: 'Aroma fresco y marino inspirado en la belleza de Pantelleria.',
            image: 'images/acqua-di-gio.jpg'
        },
        {
            id: 'm4',
            name: 'Le Male',
            brand: 'Jean Paul Gaultier',
            price: 65.99,
            category: 'casual',
            description: 'Fragancia oriental con notas de lavanda, vainilla y menta.',
            image: 'images/le-male.jpg'
        },
        {
            id: 'm5',
            name: 'Invictus',
            brand: 'Paco Rabanne',
            price: 72.25,
            category: 'sport',
            description: 'Fragancia fresca y deportiva con notas de laurel y madera de guayaco.',
            image: 'images/invictus.jpg'
        },
        {
            id: 'm6',
            name: 'Cool Water',
            brand: 'Davidoff',
            price: 45.50,
            category: 'sport',
            description: 'Fragancia fresca y acuática con notas de menta y lavanda.',
            image: 'images/cool-water.jpg'
        },
        {
            id: 'm7',
            name: 'One Million',
            brand: 'Paco Rabanne',
            price: 79.99,
            category: 'elegant',
            description: 'Fragancia especiada y frutal con un toque de cuero y sangre de mandarina.',
            image: 'images/one-million.jpg'
        },
        {
            id: 'm8',
            name: 'Boss Bottled',
            brand: 'Hugo Boss',
            price: 68.75,
            category: 'casual',
            description: 'Fragancia elegante con notas de manzana, canela y sándalo.',
            image: 'images/boss-bottled.jpg'
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
            image: 'images/coco-mademoiselle.jpg'
        },
        {
            id: 'w2',
            name: 'J\'adore',
            brand: 'Dior',
            price: 98.75,
            category: 'floral',
            description: 'Fragancia floral sofisticada con notas de mandarina, jazmín y rosa.',
            image: 'images/jadore.jpg'
        },
        {
            id: 'w3',
            name: 'La Vie Est Belle',
            brand: 'Lancôme',
            price: 89.99,
            category: 'frutal',
            description: 'Fragancia gourmand con notas de grosella negra, pera y praliné.',
            image: 'images/la-vie-est-belle.jpg'
        },
        {
            id: 'w4',
            name: 'Good Girl',
            brand: 'Carolina Herrera',
            price: 92.25,
            category: 'oriental',
            description: 'Fragancia oriental floral con notas de almendra, café y cacao.',
            image: 'images/good-girl.jpg'
        },
        {
            id: 'w5',
            name: 'Black Opium',
            brand: 'Yves Saint Laurent',
            price: 95.50,
            category: 'oriental',
            description: 'Fragancia adictiva con notas de café, vainilla y flores blancas.',
            image: 'images/black-opium.jpg'
        },
        {
            id: 'w6',
            name: 'Daisy',
            brand: 'Marc Jacobs',
            price: 72.99,
            category: 'floral',
            description: 'Fragancia fresca y floral con notas de violeta, jazmín y madera.',
            image: 'images/daisy.jpg'
        },
        {
            id: 'w7',
            name: 'Chance',
            brand: 'Chanel',
            price: 88.25,
            category: 'floral',
            description: 'Fragancia floral con notas de pimienta rosa, jazmín y pachulí.',
            image: 'images/chance.jpg'
        },
        {
            id: 'w8',
            name: 'Miss Dior',
            brand: 'Dior',
            price: 99.75,
            category: 'frutal',
            description: 'Fragancia floral y afrutada con notas de mandarina, rosa y pachulí.',
            image: 'images/miss-dior.jpg'
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
            image: 'images/sauvage-set.jpg'
        },
        {
            id: 'f2',
            name: 'Set J\'adore',
            brand: 'Dior',
            price: 130.00,
            oldPrice: 160.00,
            description: 'Set de lujo con Eau de Parfum 100ml y loción corporal 75ml.',
            image: 'images/jadore-set.jpg'
        },
        {
            id: 'f3',
            name: 'Discovery Set Masculino',
            brand: 'Multi-marca',
            price: 65.00,
            oldPrice: 90.00,
            description: 'Colección de 5 miniaturas de las fragancias más populares para hombre.',
            image: 'images/men-discovery.jpg'
        }
    ]
};

// Exportamos los datos para usarlos en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsData;
}

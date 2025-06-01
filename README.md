# Essencity Parfums - Tienda de Perfumes

Un sitio web de e-commerce para una tienda de perfumes, con catálogo para hombres y mujeres, carrito de compras y funcionalidad para enviar pedidos a través de WhatsApp.

## Características

- Catálogo de productos separado por categorías (hombres y mujeres)
- Filtros de productos por tipo de fragancia
- Carrito de compras con almacenamiento local
- Sección de ofertas especiales
- Formulario de contacto
- Generación de pedidos exportables a WhatsApp
- Diseño totalmente responsive

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- LocalStorage para almacenamiento de datos del carrito

## Estructura del proyecto

```
E-commerce/
│
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos CSS
├── js/
│   ├── products.js         # Datos de productos
│   └── app.js              # Lógica principal
└── images/                 # Imágenes (no incluidas)
```

## Cómo usar

1. Clona este repositorio o descarga los archivos
2. Abre el archivo `index.html` en tu navegador web
3. Navega por el catálogo y añade productos al carrito
4. Para finalizar la compra, completa el formulario y envía el pedido

## Despliegue en GitHub Pages

Para desplegar este proyecto en GitHub Pages:

1. Sube el proyecto a un repositorio de GitHub:
   ```
   git remote add origin https://github.com/TU_USUARIO/essencity-parfums.git
   git branch -M main
   git push -u origin main
   ```
2. Ve a la configuración del repositorio en GitHub
3. En la sección "GitHub Pages", selecciona la rama main como fuente
4. Guarda los cambios y espera unos minutos
5. Tu sitio estará disponible en https://andresmacsi.github.io/essencity-parfums/

## Personalización

### Agregar nuevos productos

Para agregar nuevos productos, edita el archivo `js/products.js` siguiendo la estructura existente:

```javascript
{
    id: 'identificador-único',
    name: 'Nombre del Perfume',
    brand: 'Marca',
    price: 99.99,
    category: 'categoría',
    description: 'Descripción del perfume',
    image: 'images/imagen.jpg'
}
```

### Cambiar estilos

Los estilos principales se pueden modificar editando las variables CSS en el archivo `css/styles.css`:

```css
:root {
    --primary-color: #4a4a4a;
    --secondary-color: #f8a5c2;
    --background-color: #f9f9f9;
    --text-color: #333;
    --accent-color: #9b4dca;
    /* ... */
}
```

## Futuras mejoras

- Integración con bases de datos
- Sistema de autenticación de usuarios
- Pasarela de pagos
- Sistema de valoraciones y comentarios
- Panel de administración para gestionar productos
- Optimización de imágenes para mejorar el rendimiento

## Contribuir al proyecto

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añade nueva característica'`)
4. Sube los cambios a tu fork (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

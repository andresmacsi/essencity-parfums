// Esperamos a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar carrito como un array vacío
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Elementos del DOM
    const menProductsContainer = document.getElementById('men-products');
    const womenProductsContainer = document.getElementById('women-products');
    const featuredContainer = document.querySelector('.featured-container');
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.querySelector('.cart-count');
    const clearCartButton = document.getElementById('clear-cart');
    const checkoutButton = document.getElementById('checkout-btn');
    const backToCartButton = document.getElementById('back-to-cart');
    const checkoutForm = document.getElementById('checkout-form');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Cargar productos
    loadProducts(productsData.men, menProductsContainer);
    loadProducts(productsData.women, womenProductsContainer);
    loadProducts(productsData.featured, featuredContainer);
    updateCartCount();
    
    // Eventos
    cartIcon.addEventListener('click', openCartModal);
    closeModalButtons.forEach(button => {
        button.addEventListener('click', closeModals);
    });
    clearCartButton.addEventListener('click', clearCart);
    checkoutButton.addEventListener('click', openCheckoutModal);
    backToCartButton.addEventListener('click', backToCart);
    checkoutForm.addEventListener('submit', processOrder);
    
    // Evento para filtros
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            const parentSection = this.closest('section');
            const productsContainer = parentSection.querySelector('.products-container');
            const gender = productsContainer.id === 'men-products' ? 'men' : 'women';
            
            // Activar el botón seleccionado
            parentSection.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Filtrar productos
            filterProducts(gender, filterValue, productsContainer);
        });
    });
    
    // Función para cargar productos
    function loadProducts(products, container) {
        container.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.setAttribute('data-category', product.category || '');
            
            const isDiscounted = product.oldPrice !== undefined;
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="brand">${product.brand}</p>
                    <p class="description">${product.description}</p>
                    <p class="price">
                        ${isDiscounted ? `<span style="text-decoration: line-through; color: #888; margin-right: 10px;">$ ${product.oldPrice.toFixed(0)} COP</span>` : ''}
                        $ ${product.price.toFixed(0)} COP
                    </p>
                    <button class="btn add-to-cart" data-id="${product.id}" data-type="${container.id === 'men-products' ? 'men' : (container.id === 'women-products' ? 'women' : 'featured')}">
                        Añadir al Carrito
                    </button>
                </div>
            `;
            
            container.appendChild(productCard);
        });
        
        // Añadir evento a los botones "Añadir al Carrito"
        const addToCartButtons = container.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const productType = this.getAttribute('data-type');
                addToCart(productId, productType);
            });
        });
    }
    
    // Función para filtrar productos
    function filterProducts(gender, category, container) {
        const products = container.querySelectorAll('.product-card');
        
        if (category === 'all') {
            products.forEach(product => {
                product.style.display = 'block';
            });
        } else {
            products.forEach(product => {
                if (product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
    }
    
    // Función para añadir productos al carrito
    function addToCart(productId, productType) {
        let product;
        
        // Buscar el producto en el array correspondiente
        if (productsData[productType]) {
            product = productsData[productType].find(p => p.id === productId);
        }
        
        if (!product) return;
        
        // Verificar si el producto ya está en el carrito
        const existingProductIndex = cart.findIndex(item => item.id === productId);
        
        if (existingProductIndex !== -1) {
            // Incrementar cantidad si ya existe
            cart[existingProductIndex].quantity += 1;
        } else {
            // Añadir nuevo producto al carrito
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                brand: product.brand,
                image: product.image,
                quantity: 1
            });
        }
        
        // Guardar carrito en localStorage
        saveCart();
        updateCartCount();
        
        // Mostrar notificación
        showNotification(`${product.name} añadido al carrito`);
    }
    
    // Función para mostrar notificación
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Estilos para la notificación
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = 'var(--accent-color)';
        notification.style.color = 'white';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '4px';
        notification.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        notification.style.zIndex = '2000';
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s';
        
        document.body.appendChild(notification);
        
        // Mostrar y ocultar la notificación
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Función para actualizar el contador del carrito
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    
    // Función para guardar el carrito en localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Función para abrir el modal del carrito
    function openCartModal() {
        updateCartItems();
        cartModal.style.display = 'block';
    }
    
    // Función para cerrar los modales
    function closeModals() {
        cartModal.style.display = 'none';
        checkoutModal.style.display = 'none';
    }
    
    // Función para actualizar los items del carrito en el modal
    function updateCartItems() {
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Tu carrito está vacío</p>';
            cartTotal.textContent = '0.00';
            return;
        }
        
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-brand">${item.brand}</div>
                    <div class="cart-item-price">$ ${item.price.toFixed(0)} COP x ${item.quantity} = $ ${itemTotal.toFixed(0)} COP</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                </div>
                <button class="remove-item" data-id="${item.id}">Eliminar</button>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        cartTotal.textContent = total.toFixed(0);
        
        // Añadir eventos a los botones de cantidad y eliminar
        const decreaseButtons = cartItemsContainer.querySelectorAll('.decrease');
        const increaseButtons = cartItemsContainer.querySelectorAll('.increase');
        const removeButtons = cartItemsContainer.querySelectorAll('.remove-item');
        
        decreaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                decreaseQuantity(productId);
            });
        });
        
        increaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                increaseQuantity(productId);
            });
        });
        
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                removeFromCart(productId);
            });
        });
    }
    
    // Función para disminuir la cantidad de un producto
    function decreaseQuantity(productId) {
        const productIndex = cart.findIndex(item => item.id === productId);
        
        if (productIndex !== -1) {
            if (cart[productIndex].quantity > 1) {
                cart[productIndex].quantity -= 1;
            } else {
                cart.splice(productIndex, 1);
            }
            
            saveCart();
            updateCartItems();
            updateCartCount();
        }
    }
    
    // Función para aumentar la cantidad de un producto
    function increaseQuantity(productId) {
        const productIndex = cart.findIndex(item => item.id === productId);
        
        if (productIndex !== -1) {
            cart[productIndex].quantity += 1;
            saveCart();
            updateCartItems();
            updateCartCount();
        }
    }
    
    // Función para eliminar un producto del carrito
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartItems();
        updateCartCount();
    }
    
    // Función para vaciar el carrito
    function clearCart() {
        cart = [];
        saveCart();
        updateCartItems();
        updateCartCount();
    }
    
    // Función para abrir el modal de checkout
    function openCheckoutModal() {
        if (cart.length === 0) {
            showNotification('Tu carrito está vacío');
            return;
        }
        
        cartModal.style.display = 'none';
        checkoutModal.style.display = 'block';
    }
    
    // Función para volver al carrito desde el checkout
    function backToCart() {
        checkoutModal.style.display = 'none';
        cartModal.style.display = 'block';
    }
    
    // Función para procesar el pedido
    function processOrder(e) {
        e.preventDefault();
        
        if (cart.length === 0) {
            showNotification('Tu carrito está vacío');
            return;
        }
        
        // Obtener datos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const department = document.getElementById('department').value;
        const city = document.getElementById('city').value;
        const address = document.getElementById('address').value;
        
        // Validar que se haya seleccionado departamento y ciudad
        if (!department || !city) {
            showNotification('Por favor selecciona un departamento y una ciudad');
            return;
        }
        
        // Generar ID de pedido único (fecha + 6 caracteres aleatorios)
        const orderId = generateOrderId();
        
        // Generar el mensaje para WhatsApp
        let message = `*NUEVO PEDIDO #${orderId}*\n\n`;
        message += `*Datos del cliente:*\n`;
        message += `ID Pedido: ${orderId}\n`;
        message += `Nombre: ${name}\n`;
        message += `Email: ${email}\n`;
        message += `Teléfono: ${phone}\n`;
        message += `Departamento: ${department}\n`;
        message += `Ciudad: ${city}\n`;
        message += `Dirección: ${address}\n\n`;
        
        message += `*Productos:*\n`;
        
        let total = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            message += `- ${item.name} (${item.brand}): ${item.quantity} x $ ${item.price.toFixed(0)} COP = $ ${itemTotal.toFixed(0)} COP\n`;
        });
        
        message += `\n*TOTAL: $ ${total.toFixed(0)} COP*`;
        
        // Codificar el mensaje para WhatsApp
        const encodedMessage = encodeURIComponent(message);
        // Usar el número de WhatsApp de la empresa
        const companyWhatsApp = "+573154874415";
        const whatsappURL = `https://wa.me/${companyWhatsApp}?text=${encodedMessage}`;
        
        // Abrir WhatsApp en una nueva ventana
        window.open(whatsappURL, '_blank');
        
        // Generar archivo de pedido para descargar
        generateOrderFile(orderId, name, email, phone, department, city, address, total);
        
        // Vaciar carrito y cerrar modal
        clearCart();
        closeModals();
        
        showNotification('¡Gracias por tu pedido! Redirigiendo a WhatsApp...');
    }
      // Función para generar archivo de pedido
    function generateOrderFile(orderId, name, email, phone, department, city, address, total) {
        let orderText = `PEDIDO #${orderId} - ESSENCITY PARFUMS\n`;
        orderText += `Fecha: ${new Date().toLocaleDateString()}\n\n`;
        orderText += `DATOS DEL CLIENTE:\n`;
        orderText += `ID Pedido: ${orderId}\n`;
        orderText += `Nombre: ${name}\n`;
        orderText += `Email: ${email}\n`;
        orderText += `Teléfono: ${phone}\n`;
        orderText += `Departamento: ${department}\n`;
        orderText += `Ciudad: ${city}\n`;
        orderText += `Dirección: ${address}\n\n`;
        
        orderText += `PRODUCTOS:\n`;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            orderText += `${item.name} (${item.brand})\n`;
            orderText += `Cantidad: ${item.quantity}\n`;
            orderText += `Precio unitario: $ ${item.price.toFixed(0)} COP\n`;
            orderText += `Subtotal: $ ${itemTotal.toFixed(0)} COP\n\n`;
        });
        
        orderText += `TOTAL: $ ${total.toFixed(0)} COP`;
        
        // Crear archivo para descargar
        const blob = new Blob([orderText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `pedido_${orderId}_${name.replace(/\s+/g, '_')}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    // Función para generar un ID de pedido único
    function generateOrderId() {
        const date = new Date();
        const year = date.getFullYear().toString().slice(-2); // Últimos 2 dígitos del año
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const random = Math.random().toString(36).substring(2, 8).toUpperCase(); // 6 caracteres aleatorios
        return `EP${year}${month}${day}-${random}`;
    }
    
    // Cerrar modales al hacer clic fuera del contenido
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        } else if (e.target === checkoutModal) {
            checkoutModal.style.display = 'none';
        }
    });
});

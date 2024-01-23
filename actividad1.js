class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('Todos los campos son obligatorios');
            return;
        }

        // Validar que el campo code no se repita
        if (this.products.some(product => product.code === code)) {
            console.error('El código ya existe. No se puede agregar el producto.');
            return;
        }

        // Agregar producto al arreglo
        const product = {
            id: this.productIdCounter++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(product);
        console.log('Producto agregado correctamente:', product);
    }

    getProducts() {
        console.log('Todos los productos:', this.products);
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);

        if (product) {
            console.log('Producto encontrado:', product);
            return product;
        } else {
            console.error('Producto no encontrado. ID:', id);
        }
    }
}

// Ejemplo de uso:
const productManager = new ProductManager();

productManager.addProduct('Producto 1', 'Descripción 1', 19, 'imagen1.jpg', 'P001', 10);
productManager.addProduct('Producto 2', 'Descripción 2', 29, 'imagen2.jpg', 'P002', 15);

const allProducts = productManager.getProducts();

const productIdToFind = 4;
const foundProduct = productManager.getProductById(productIdToFind);

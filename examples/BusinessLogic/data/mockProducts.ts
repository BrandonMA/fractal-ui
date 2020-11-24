import { Product } from '../models/Product';

function createProducts(amount: number): Array<Product> {
    const products = Array<Product>();
    for (let i = 0; i < amount; i++) {
        products.push({
            name: 'Luz Delantera' + i,
            imageURL: 'https://windsorciclismo.com/wp-content/uploads/2019/02/WINLZ10.jpg',
            price: 100,
            description: '3 Leds en Blanco\nBaterias de 20 Lúmenes',
            sku: `${i}`,
            filter: i % 2 === 0 ? 1 : 2,
            details: new Map([
                ['Gama', 'Media'],
                ['Marca', 'HUNTER'],
                ['Categoría', 'Componentes para bicicleta'],
                ['Modalidad', 'City'],
                ['Unidad de medida', 'Pieza'],
                ['Medida', '20'],
                ['Peso', '1'],
                ['Material', 'Aluminio']
            ])
        });
    }
    return products;
}

export const mockProducts: Array<Product> = createProducts(1000);

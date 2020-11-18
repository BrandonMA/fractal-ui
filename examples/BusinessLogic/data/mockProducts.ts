import { Product } from '../models/Product';

export const mockProducts: Array<Product> = [
    {
        name: 'Luz Delantera',
        imageURL: 'https://windsorciclismo.com/wp-content/uploads/2019/02/WINLZ10.jpg',
        price: 100,
        description: '3 Leds en Blanco\nBaterias de 20 Lúmenes',
        sku: '1',
        filters: ['BMX'],
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
    },
    {
        name: 'Luz Trasera',
        imageURL: 'https://windsorciclismo.com/wp-content/uploads/2019/02/WINLZ10.jpg',
        price: 100,
        description: '3 Leds en Blanco\nBaterias de 20 Lúmenes',
        sku: '2',
        filters: ['City'],
        details: new Map([
            ['Gama', 'Media'],
            ['Marca', 'HUNTER']
        ])
    },
    {
        name: 'Luz Delantera 2',
        imageURL: 'https://windsorciclismo.com/wp-content/uploads/2019/02/WINLZ10.jpg',
        price: 100,
        description: '3 Leds en Blanco\nBaterias de 20 Lúmenes',
        sku: '3',
        filters: ['BMX'],
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
    },
    {
        name: 'Luz Trasera 2',
        imageURL: 'https://windsorciclismo.com/wp-content/uploads/2019/02/WINLZ10.jpg',
        price: 100,
        description: '3 Leds en Blanco\nBaterias de 20 Lúmenes',
        sku: '4',
        filters: ['City'],
        details: new Map([
            ['Gama', 'Media'],
            ['Marca', 'HUNTER']
        ])
    }
];

import { FilterSection } from './FiltersSection';
import { Product } from './Product';

export const mockFilters: Array<FilterSection> = [
    {
        title: 'Tipo',
        filters: [
            {
                title: 'Modalidad',
                values: ['BMX', 'City', 'Montaña', 'Ruta']
            }
        ]
    },
    {
        title: 'Componentes para bicicleta',
        filters: [
            {
                title: 'Cuadro',
                values: ['Amortiguador', 'Buje para cuadro', 'Cuadros', 'Guía pasa cable', 'Porta ejes']
            }
        ]
    }
];

export const mockProducts: Array<Product> = [
    {
        name: 'Luz Delantera',
        imageURL: 'https://windsorciclismo.com/wp-content/uploads/2019/02/WINLZ10.jpg',
        price: 100,
        description: '3 Leds en Blanco\nBaterias de 20 Lúmenes'
    },
    {
        name: 'Luz Trasera',
        imageURL: 'https://windsorciclismo.com/wp-content/uploads/2019/02/WINLZ10.jpg',
        price: 100,
        description: '3 Leds en Blanco\nBaterias de 20 Lúmenes'
    }
];

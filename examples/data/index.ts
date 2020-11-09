import { FilterSection } from '../models/FiltersSection';
import { Product } from '../models/Product';
import { Notification } from '../models/Notification';

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
        description: '3 Leds en Blanco\nBaterias de 20 Lúmenes',
        sku: '1',
        filters: ['BMX']
    },
    {
        name: 'Luz Trasera',
        imageURL: 'https://windsorciclismo.com/wp-content/uploads/2019/02/WINLZ10.jpg',
        price: 100,
        description: '3 Leds en Blanco\nBaterias de 20 Lúmenes',
        sku: '2',
        filters: ['City']
    }
];

export const mockNotifications: Array<Notification> = [
    {
        id: '1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: new Date()
    },
    {
        id: '2',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: new Date('Aug 9, 2020')
    }
];

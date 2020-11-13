import { FilterSection } from '../models/FiltersSection';
import { Product } from '../models/Product';
import { Notification } from '../models/Notification';
import { Order } from '../models/Order';
import { Address } from '../models/Address';

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

export const mockAddresses: Array<Address> = [
    {
        id: '1',
        street: 'Calle',
        district: 'Colonia',
        city: 'Ciudad',
        postalCode: '99999',
        state: 'Estado'
    }
];

export const mockOrders: Array<Order> = [
    {
        id: '1',
        creationDate: new Date('Aug 9, 2020'),
        distributor: 'Windsor',
        vendor: 'Windsor',
        total: 300,
        key: 'laksdnlkndaldknalsknaldkno1hbodubhsdua',
        estimatedArrival: new Date(),
        status: 'En camino'
    },
    {
        id: '2',
        creationDate: new Date('Aug 8, 2020'),
        distributor: 'Windsor',
        vendor: 'Windsor',
        total: 100,
        key: 'dasdasdasdkmasldkma',
        estimatedArrival: new Date(),
        status: 'En camino'
    },
    {
        id: '3',
        creationDate: new Date('Aug 7, 2020'),
        distributor: 'Windsor',
        vendor: 'Windsor',
        total: 500,
        key: 'qiwejqowijeqoiwjeoqi',
        estimatedArrival: new Date('Aug 8, 2020'),
        status: 'Entregado'
    }
];

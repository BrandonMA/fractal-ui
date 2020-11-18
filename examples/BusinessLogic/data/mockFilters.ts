import { FilterSection } from '../models/FiltersSection';

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

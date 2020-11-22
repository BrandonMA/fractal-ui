import { FilterSection } from '../models/FiltersSection';

export const mockFiltersSections: Array<FilterSection> = [
    {
        title: 'Tipo',
        groups: [
            {
                title: 'Modalidad',
                filters: ['BMX', 'City', 'Montaña', 'Ruta']
            }
        ]
    },
    {
        title: 'Componentes para bicicleta',
        groups: [
            {
                title: 'Cuadro',
                filters: ['Amortiguador', 'Buje para cuadro', 'Cuadros', 'Guía pasa cable', 'Porta ejes']
            }
        ]
    }
];

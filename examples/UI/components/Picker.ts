import styled from 'styled-components/native';
import { Picker as NativePicker } from '@react-native-picker/picker';
import { getHeight } from './bills/util/getHeight';

export const Picker = styled(NativePicker)`
    height: ${getHeight()}px;
`;

export const PickerItem = NativePicker.Item;

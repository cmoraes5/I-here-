import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons'; 

type Props = {
    name: String;
    onRemove: () => void;
}

export function Participant({ name, onRemove }: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Feather name="trash-2" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}
import { styles } from "../Card/styles"
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 


type Props = {
    eventName: String;
    eventDate: String;
    onRemove: () => void;
}

export function Card({ eventName, eventDate, onRemove }: Props) {
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.delete} onPress={onRemove}>
                    <Feather name="trash-2" size={24} color="white" />
            </TouchableOpacity>

            <View style={styles.text}>
                <Text style={styles.eventName}>
                    {eventName}
                </Text>

                <Text style={styles.eventDate}>
                    {eventDate}
                </Text>
            </View>

            <Image
                source={require('../../img/footer.png')}
            />
        </View>
    )
}
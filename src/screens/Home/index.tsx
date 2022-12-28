import React, { useState } from 'react';
import { styles } from './styles';
import { View, FlatList, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from '../../components/Card';
import { Events } from '../Events';

export function Home() {
  const [eventName, setEventName] = useState('');
  const [events, setEvents] = useState<string[]>([]);
  const [eventDate, setEventDate] = useState('Descrição ou data');

  const navigation = useNavigation();

  function openEvent() {
    navigation.navigate('Events', {nomeDoEvento: eventName})
  }

  function handleEventAdd() {
    if(events.includes(eventName)) {
      return Alert.alert('Evento ja existente', 'Já existe um evento semelhante na lista');
    }
    else if (eventName == '') {
      return Alert.alert('Campo vazio', 'Digite o nome de um evento primeiro')
    }

    setEvents(prevState => [...prevState, eventName]);
    setEventName('');
  }

  function handleEventRemove(eventName: string) {
    Alert.alert('Remover', `Remover o evento ${eventName}?`, [
      {
        text: 'Sim',
        onPress: () => setEvents(prevState => prevState.filter(event => event !== eventName)),
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ])
  }

  function handleEventName() {
    setEventName(eventName)
    if (eventName == '') {
      return Alert.alert('Campo vazio...', 'Preencha o campo corretamente');
    }
  }


  return (
    <View style={styles.container}>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Crie um novo evento'
          placeholderTextColor='#6b6b6b'
          onChangeText={setEventName}
          value={eventName}
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleEventAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>


      <FlatList
        data={events}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}
            onPress={openEvent}>
            <Card
              key={item}
              eventName={item}
              eventDate={eventDate}
              onRemove={() => handleEventRemove(item)}
            />
          </TouchableOpacity>

        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no envento ainda? Adicione participantes a sua lista de presença
          </Text>
        )}
      />

    </View>
  )
}
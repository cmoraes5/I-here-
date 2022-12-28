import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';


import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useRoute } from '@react-navigation/native';

type ParamsProps = {
  nomeDoEvento: any;
}

export function Events() {
  const route = useRoute();
  const { nomeDoEvento } = route.params as ParamsProps;

  const actualDate = new Date().toLocaleString()

  const [eventName, setEventName] = useState(nomeDoEvento);
  const [eventDate, setEventDate] = useState(actualDate);
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleEventName() {
    setEventName(eventName)
  }

  function handleEventDate() {
    setEventName(eventDate)
    if (eventDate == '') {
      return Alert.alert('Campo vazio...', 'Preencha o campo corretamente');
    }
  }

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Participante já existente', `${participantName} ja foi adicionado`,
      )
    }
    else if (participantName == '') {
      return Alert.alert('Campo vazio', 'Digite o nome de um participante primeiro')
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)),
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ])
  }

  return (
    <View style={styles.container}>

      <View style={styles.eventContainer}>
        <TouchableOpacity onPress={handleEventName}>
          <TextInput style={styles.eventName}
            onChangeText={setEventName}
            value={nomeDoEvento}
            autoFocus
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleEventDate}>
          <TextInput style={styles.eventDate}
            onChangeText={setEventDate}
            value={eventDate}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
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
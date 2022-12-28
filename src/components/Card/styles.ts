import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1F1E25',
    height: 237,
    width: 324,
    paddingTop: 40,
    borderRadius: 5,
    justifyContent: 'space-between',
  },

  delete: {
    position: 'absolute',
    right: 0, 
    width: 48,
    height: 48,
    borderTopEndRadius: 5,
    borderBottomStartRadius: 5,
    backgroundColor: '#E23C44',
    alignItems: 'center',
    justifyContent: 'center',
  },

  deleteText: {
    color: '#fff',
    fontSize: 28,
  },

  text: {
    marginLeft: 28,
  },

  eventName: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  eventDate: {
    color: '#6B6B6B',
    fontSize: 20,
  }
});


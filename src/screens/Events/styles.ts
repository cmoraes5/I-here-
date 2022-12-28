import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    paddingHorizontal: 24,
  },

  eventContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingBottom: 5,
    marginTop: 11,
  },

  eventName: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },

  eventDate: {
    color: '#6b6b6b',
    fontSize: 20
  },

  form: {
    marginTop: 36,
    marginBottom: 42,
    width: '100%',
    flexDirection: 'row',
  },

  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1F1E25',
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 28,
  },

  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  }
});
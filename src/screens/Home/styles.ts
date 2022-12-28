import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
    alignItems:'center',
  },

  form: {
    marginTop: 88,
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
  
  buttonAdd: {
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


  card: {
    marginTop: 88,
  },

  
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  }
});


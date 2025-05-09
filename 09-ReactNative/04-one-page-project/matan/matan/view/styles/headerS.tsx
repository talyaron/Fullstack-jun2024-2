import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingTop: 30,
      paddingBottom: 20,
      position: 'relative',
    },
    topRight: {
      position: 'absolute',
      top: 40,
      right: 20,
      padding: 10,
    },
    moreIcon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
    avatar: {
      width: 200,
      height: 200,
      borderRadius: 50,
      marginTop: 20,
      backgroundColor: '#eee',
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 10,
    },
  });

  export default styles;
import { StyleSheet, View } from 'react-native';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'; 

export default function TopNav() {
  return (
    <View style={styles.navbar}>
      <View style={styles.left}>
        <View style={styles.iconCircle}>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>
      </View>
      <View style={styles.right}>
        <View style={styles.iconCircle}>
          <Ionicons name="camera" size={24} color="black" />
        </View>
        <View style={styles.iconCirclePlus}>
        <MaterialIcons name="add" size={28} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    navbar: {
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50, 
        backgroundColor: 'white',
        height: 100,
        zIndex: 10,
      },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconCircle: {
    backgroundColor: '#e7e7e7',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCirclePlus: {
    backgroundColor: '#5da66a',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: 'black',
    fontFamily: 'Ariel',
    fontSize: 16,
  }
});

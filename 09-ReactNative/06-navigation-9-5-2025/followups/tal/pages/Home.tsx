import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Button } from '@react-navigation/elements';

export type RootStackParamList = {
    Home: undefined;
    Details: undefined;
};

function HomeScreen() {

   

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate('Details')}>
                Go to Details
            </Button>
        </View>
    );
}

export default HomeScreen;
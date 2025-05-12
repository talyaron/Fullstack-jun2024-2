import { Text, View } from "react-native";
import { Button } from '@react-navigation/elements';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./Home";

function DetailsScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button onPress={() => navigation.push('Details')}>
                Go to Details... again
            </Button>
        </View>
    );
}

export default DetailsScreen;
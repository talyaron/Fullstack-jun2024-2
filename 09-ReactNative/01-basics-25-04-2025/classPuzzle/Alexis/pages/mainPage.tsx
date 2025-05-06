import { View } from "react-native";
import { Header } from "./../components/header";
import { StatusBar } from "expo-status-bar";    
import mainStyles from "./../styles/pageStyle";
import { Colors } from "../styles/colors";

export const mainPage = () => {
    return (
        <View style={mainStyles.container}>
        <Header />

        </View>
    );
    }
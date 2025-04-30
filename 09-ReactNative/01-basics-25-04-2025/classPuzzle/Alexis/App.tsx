import { View } from 'react-native';
import appStyles from './styles/App.styles';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <View style={appStyles.container}>
      <MainPage />
    </View>
  );
}

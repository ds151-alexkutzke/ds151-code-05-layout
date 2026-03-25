import { View, StyleSheet } from 'react-native';
import CalculatorLayoutScreen from './src/screens/CalculadoraScreen';
import LayoutExampleScreen from './src/screens/LayoutExampleScreen';
import TicTacToeLayoutScreen from './src/screens/TicTacToeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.quadro, styles.red]}>
      </View>
      <View style={[styles.quadro, styles.green]}>
      </View>
      <View style={[styles.quadro, styles.blue]}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'gray',
  },
  quadro: {
    borderWidth: 2,
    borderColor: 'black',
    height: 200,
  },
  red: {
    backgroundColor: 'red',
    position: 'absolute',
    left: 0,
    top: 0,
    width: 200,
    zIndex: 100,
  },
  green: {
    backgroundColor: 'green',
    flex: 2,
  },
  blue: {
    backgroundColor: 'blue',
    flex: 3,
  },
});

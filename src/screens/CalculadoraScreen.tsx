import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const CalculatorLayoutScreen = () => {
  const buttons = [
    ['C', '+/-', '%', '/'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='], // O zero ocupará mais espaço
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Área de Display */}
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>2.026</Text>
      </View>

      {/* Área do Teclado */}
      <View style={styles.keypadContainer}>
        <ScrollView>
          {buttons.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((btn) => (
                <TouchableOpacity
                  key={btn}
                  style={[
                    styles.button,
                    btn === '0' ? styles.buttonZero : null,
                    ['/', 'X', '-', '+', '='].includes(btn) ? styles.buttonOperator : null,
                  ]}
                >
                  <Text style={styles.buttonText}>{btn}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 70,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  keypadContainer: {
    maxHeight: 400,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonZero: {
    width: 180, // Ocupa o espaço de dois botões
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  buttonOperator: {
    backgroundColor: '#FF9500',
  },
  buttonText: {
    fontSize: 32,
    color: '#FFFFFF',
  },
});

export default CalculatorLayoutScreen;

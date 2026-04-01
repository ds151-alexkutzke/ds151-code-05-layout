import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const TicTacToeLayoutScreen = () => {
  // Matriz 3x3 representando o estado estático do tabuleiro para o layout
  const board = [
    ['X', 'O', ''],
    ['', 'X', ''],
    ['O', '', 'X'],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Jogo da Velha</Text>
        <Text style={styles.subtitle}>Vez do jogador: O</Text>
      </View>

      <View style={styles.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <TouchableOpacity
                key={`${rowIndex}-${colIndex}`}
                style={[
                  styles.cell,
                  // Remove a borda superior da primeira linha e inferior da última
                  rowIndex === 0 && styles.noTopBorder,
                  rowIndex === 2 && styles.noBottomBorder,
                  // Remove a borda esquerda da primeira coluna e direita da última
                  colIndex === 0 && styles.noLeftBorder,
                  colIndex === 2 && styles.noRightBorder,
                ]}
              >
                <Text style={[styles.cellText, cell === 'X' ? styles.textX : styles.textO]}>
                  {cell}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reiniciar Jogo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'space-evenly', // Distribui header, tabuleiro e botão
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 18,
    color: '#4B5563',
    marginTop: 8,
  },
  board: {
    width: 300,
    height: 300,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#374151',
  },
  noTopBorder: { borderTopWidth: 0 },
  noBottomBorder: { borderBottomWidth: 0 },
  noLeftBorder: { borderLeftWidth: 0 },
  noRightBorder: { borderRightWidth: 0 },
  cellText: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  textX: { color: '#EF4444' },
  textO: { color: '#3B82F6' },
  resetButton: {
    backgroundColor: '#1F2937',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TicTacToeLayoutScreen;

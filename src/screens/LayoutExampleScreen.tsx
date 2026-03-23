import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const LayoutExampleScreen = () => {
  const [text, setText] = useState('');

  return (
    // SafeAreaView: Protege contra notches e barras de navegação (iOS/Android)
    <SafeAreaView style={styles.safeArea}>

      {/* KeyboardAvoidingView: Empurra o layout para cima quando o teclado abre */}
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* TouchableWithoutFeedback: Fecha o teclado ao tocar fora do input */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <View style={styles.innerContainer}>

            {/* CABEÇALHO: Exemplo de flexDirection: 'row' */}
            <View style={styles.header}>
              <View style={styles.avatarPlaceholder} />
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerTitle}>Flexbox Row</Text>
                <Text>Alinhamento horizontal</Text>
              </View>
            </View>

            {/* ÁREA CENTRAL: Exemplo de flex: 1 (ocupa o espaço restante) e alinhamento central */}
            <View style={styles.mainContent}>
              <View style={styles.box}>
                <Text style={styles.boxText}>Box 1</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.boxText}>Box 2</Text>
              </View>
            </View>

            {/* RODAPÉ: Onde o problema do teclado ocorre se não houver KeyboardAvoidingView */}
            <View style={styles.footer}>
              <TextInput
                style={styles.input}
                placeholder="Toque para abrir o teclado..."
                value={text}
                onChangeText={setText}
              />
            </View>

          </View>

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E5E7EB', // Cor de fundo para contrastar com as áreas seguras
  },
  keyboardContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
  },

  /* --- Estilos do Cabeçalho --- */
  header: {
    flexDirection: 'row', // Altera o eixo principal para horizontal
    alignItems: 'center', // Alinha os itens transversalmente ao centro
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3B82F6',
    marginRight: 16,
  },
  headerTextContainer: {
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  /* --- Estilos da Área Central --- */
  mainContent: {
    flex: 1, // Instrui a view a crescer e ocupar todo o espaço entre o header e o footer
    justifyContent: 'center', // Centraliza as caixas verticalmente
    alignItems: 'center', // Centraliza as caixas horizontalmente
    backgroundColor: '#F3F4F6',
    marginVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderStyle: 'dashed', // Borda tracejada para fins didáticos
  },
  box: {
    width: 150,
    height: 80,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10, // Espaçamento entre as caixas
    borderRadius: 8,
  },
  boxText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  /* --- Estilos do Rodapé --- */
  footer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
  },
});

export default LayoutExampleScreen;

import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import ProductList from './Component/productlist'

export default function App() {
  const [OutputText,setText] = useState("Test Native Button")
  return (
    <View style={styles.container}>
      <Text> My Native App </Text>
      <Text>{OutputText}</Text>
      <Button title="Click Me" onPress={() => setText('Text Changed')}/>
      <Button title="Click Me" onPress={() => setText('Test Native Button')}/>
      <ProductList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
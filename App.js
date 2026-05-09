/* Importando todos os componentes necessários */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, StatusBar as RNStatusBar } from 'react-native';

// Array que guarda os dados estáticos (dados mockados) do app, para fins de teste
const products = [
  {
    id: 1,
    name: "Beef Burguer",
    calories: 70,
    price: 12,
    image: require('./assets/img/burguer.png'),
  },
  {
    id: 2,
    name: "Pancakes",
    calories: 60,
    price: 15,
    image: require('./assets/img/pancake.png'),
  },
];

// Esse é o componente que implementa cada card de produto
function ProductCard({ product }) {
  const { name, calories, price, image } = product;

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.calories}>🔥 {calories} Calories</Text>
        <Text style={styles.price}>$ {price.toFixed(2)}</Text>
      </View>

      <Image source={image} style={styles.image} />
    </View>
  );
}

// Aqui fica o componente principal no qual o app roda, e dentro dele temos um componente 'FlatList' para criar uma lista dinâmica com rolagem, conforme visto na web 02
export default function App() {
  return (
    <SafeAreaView style={styles.container}> {/* Renderiza conteúdo apenas nas áreas livres e seguras */}
      <FlatList
        data={products}
        keyExtractor={function(item) {
          return item.id.toString();
        }}
        renderItem={function({ item }) {
          return <ProductCard product={item} />; // Aqui é chamado o componente ProductCard que foi criado acima
        }}
        contentContainerStyle={styles.list}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: RNStatusBar.currentHeight || 0,
  },

  list: {
    paddingTop: 10,
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#eee',
    borderRadius: 8,
  },

  info: {
    flex: 1,
  },

  image: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  calories: {
    marginVertical: 5,
    color: '#888',
  },

  price: {
    fontWeight: 'bold',
    color: '#c0b235',
  }
});
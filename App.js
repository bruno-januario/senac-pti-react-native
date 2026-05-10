/* Importando todos os componentes necessários */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, StatusBar as RNStatusBar } from 'react-native';

// Array que guarda os dados estáticos (dados mockados) do app, para fins de teste
const products = [
  {
    id: 1,
    name: "Beef Burger",
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
  {
    id: 3,
    name: "Fries",
    calories: 40,
    price: 7,
    image: require('./assets/img/fries.png'),
  },
  {
    id: 4,
    name: "Hot Dog",
    calories: 55,
    price: 10,
    image: require('./assets/img/hotdog.png'),
  },
  {
    id: 5,
    name: "Donut",
    calories: 45,
    price: 8,
    image: require('./assets/img/donut.png'),
  },
  {
    id: 6,
    name: "Ice Cream",
    calories: 50,
    price: 9,
    image: require('./assets/img/icecream.png'),
  },
  {
    id: 7,
    name: "Pizza Slice",
    calories: 65,
    price: 11,
    image: require('./assets/img/pizza.png'),
  },
  {
    id: 8,
    name: "Milkshake",
    calories: 80,
    price: 14,
    image: require('./assets/img/milkshake.png'),
  },
  {
    id: 9,
    name: "Chicken Nuggets",
    calories: 58,
    price: 13,
    image: require('./assets/img/nuggets.png'),
  },
  {
    id: 10,
    name: "Soda",
    calories: 30,
    price: 6,
    image: require('./assets/img/soda.png'),
  },
];

// Esse é o componente que implementa cada card de produto (PARTE PRINCIPAL DO TRABALHO)
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={function(item) {
          return item.id.toString();
        }}
        renderItem={function({ item }) {
          // Usando o componente ProductCard que foi criado...
          return <ProductCard product={item} />;
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
    paddingBottom: 45,
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
    color: '#c4b423',
  }
});

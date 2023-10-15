import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Render =({item}) => {
  return (
    <View style={styles.subContainer}>
      <View style={styles.containImage}>
        <Image source={item.uri} style={styles.img}></Image>
      </View>

      <View style={styles.upperPos}>
        <Text style={styles.name}>
          {item.name}
        </Text>

        <Text style={styles.time}>
          {item.time}
        </Text>
      </View>

      <View style={styles.upperPos_under}>
      
      </View>

      <View style={styles.lowerPos}>
        <Text style={styles.city}>
          {item.city}
        </Text>
        <Text style={styles.price}>
          {item.price}
        </Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={({item, data}) => <Render item={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
  },
  subContainer: {
    width: '90%',
    flexDirection: 'row',
  },
  img: {

  },
  containImage: {

  },

  upperPos: {
    flexDirection: 'column'
  },

  lowerPos: {

  },

  name: {
  },

  time: {

  },

  city: {

  },

  price: {

  },

});

const data = [
  {
    name: 'One mission bay',
    time: '14 days ago',
    city: 'San francisco',
    price: '$2,950,000',
    uri: require('../assets/img/1housephoto.png'),
  },
  {
    name: 'One mission bay',
    time: '14 days ago',
    city: 'San francisco',
    price: '$2,950,000',
    uri: require('../assets/img/2housephoto.png'),
  },
  {
    name: 'One mission bay',
    time: '14 days ago',
    city: 'San francisco',
    price: '$2,950,000',
    uri: require('../assets/img/3housephoto.png'),
  },
  {
    name: 'One mission bay',
    time: '14 days ago',
    city: 'San francisco',
    price: '$2,950,000',
    uri: require('../assets/img/4housephoto.png'),
  },
  {
    name: 'One mission bay',
    time: '14 days ago',
    city: 'San francisco',
    price: '$2,950,000',
    uri: require('../assets/img/deborah-cortelazzi-615800-unsplash.png'),
  },
  {
    name: 'One mission bay',
    time: '14 days ago',
    city: 'San francisco',
    price: '$2,950,000',
    uri: require('../assets/img/michael-browning-246513-unsplash.png'),
  },
]
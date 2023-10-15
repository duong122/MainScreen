import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const Render = ({ item }) => {
  return(
    <View style={styles.renderContainer}>
      <Image source={item.uri} style={styles.ImageRender}></Image>
      <Text style={styles.TextItem}> {item.text} </Text>
    </View>
  );
};

const Renderhouses = ({ item }) => {
  return (
    <View style={styles.containerHouses}>
      <Image source={item.uri} style={styles.imgHouses}></Image>
      <Text style={styles.address}> {item.address}</Text>
      <Text style={styles.city}> {item.city}</Text>
    </View>
  );
}

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container} >
      <View style={styles.categori}>
        <Text style={styles.title}> Categories </Text>
        <View style={styles.CategoriesContent}>
          <FlatList
          data={slide}
          renderItem={({item, slide}) => <Render item={item}/>}
          horizontal
          ></FlatList>
        </View>
      </View>

      <Text style={styles.title}> Houses </Text>

      <View style={styles.houeses}>  
        <FlatList 
        data={onTheLeft}
        renderItem={({item, onTheLeft}) => <Renderhouses item={item}/>}
        />
        <FlatList
        data={onTheRight}
        renderItem={({item, onTheRight}) => <Renderhouses item={item}/>}
        />
      </View>

      <View style={styles.containButton}>
        <TouchableOpacity style={styles.btnShowAll}>
          <Text style={styles.TextShowAll}>
            Show All (7)
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  categori: {
    width: '100%',
    height: '163', 
  },
  title: {
    fontSize: 26, 
    fontWeight: '700',
     marginVertical: 20, 
     marginHorizontal: 16
  },
  renderContainer: {
    width: 130,
    height: 130,
    marginHorizontal: 15,
    borderBlockColor: '#3a3a3a',
    borderWidth: 1,
    borderRadius: 10,
  },
  ImageRender: {
    borderRadius: 10,
    width: 129,
    height: 75,
    resizeMode: 'cover',
  },
  TextItem: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 8,
  },
  containerHouses: {
    width: 159,
    height: 180,
    marginBottom: 20,
  },
  houeses: {
    flexDirection: 'row',
    marginLeft: 20,
    width: '100%',
  },
  imgHouses: {    
  },
  address: {
    fontWeight: '700',
    fontSize: 17,
    color: '#4A4A4A',
    marginVertical: 4,
  },
  city: {
    fontWeight: '400',
    fontSize: 13,
    color: '#4A4A4A',
  },
  btnShowAll: {
    width: '90%',
    height: 45,
    borderWidth: 1,
    borderColor: '#20C065',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextShowAll: {
    fontSize: 18,
    fontWeight: '700',
    color: '#20C065',
  },
  containButton: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  }
});

const slide = [
  {
    key: 1,
    text: 'Houses',
    uri: require('../assets/img/Houseimage.png')
  },
  {
    key: 2,
    text: 'Apartment',
    uri: require('../assets/img/Apartmentimage.png'),
  },
  {
    key: 3,
    text: 'Condos',
    uri: require('../assets/img/CondosImage.png')
  }
];

const onTheLeft = [
  {
    key: 1,
    address: 'One Mission Bay',
    city: 'San francisco',
    uri: require('../assets/img/1housephoto.png')
  },
  {
    key: 2,
    address: '246 Sussex St',
    city: 'San francisco',
    uri: require('../assets/img/3housephoto.png')
  },
];

const onTheRight = [
  {
    key: 1,
    address: '1410 Steiner St',
    city: 'San francisco',
    uri: require('../assets/img/2housephoto.png')
  },
  {
    key: 2,
    address: '1206 Market St',
    city: 'San francisco',
    uri: require('../assets/img/4housephoto.png')
  },
]
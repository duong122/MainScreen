import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home_1 from './screens/Home_1';
import Categories from './screens/Categories';
import Saved from './screens/Saved';
import Search from './screens/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"; 
import { ScreenStackHeaderLeftView, ScreenStackHeaderSearchBarView, SearchBar } from 'react-native-screens';
import { GestureHandlerRootView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Map from './screens/Map';

const Tab = createBottomTabNavigator();

const ImageLeft = () => {
  return (
    <TouchableOpacity>
      <Image source={require('./assets/img/fezbot2000-365718-unsplash.png')} style={{borderRadius: 25,}}/>
    </TouchableOpacity>
  );
};

const RightIcon = ({ navigation }) => {
  return (
    <View style={styles.IconHeaderContainer}>
      <Image source={require('./assets/img/addNewBtn.png')} style={styles.addNewBtn}/>
      <TouchableOpacity >
         <Image source={require('./assets/img/MapBtn.png')} style={styles.mapBtn}/>
      </TouchableOpacity>
    </View>
  );
};

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home_1' component={Home_1} options={{
        headerTitleAlign: 'center',
        headerTitle: 'Home',
        headerLeft: () => <ImageLeft/>,
        headerRight: () => <RightIcon/>
      }}/>
      <HomeStack.Screen name='Map' component={Map}/>
    </HomeStack.Navigator>
  );
};

const CategoriesStack = createNativeStackNavigator();
function CategoriesStackScreen() {
  return(
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen name='Categories' component={Categories} options={{
        headerTitleAlign: 'center',
        headerTitle: 'Categories',
      }}/>
    </CategoriesStack.Navigator>
  );
};

const SavedStack = createNativeStackNavigator();
function SavedStackStackScreen() {
  return(
    <SavedStack.Navigator>
      <SavedStack.Screen name='Saved' component={Saved} options={{
        headerTitleAlign: 'center',
        headerTitle: 'Saved',
      }}/>
    </SavedStack.Navigator>
  );
};

function LogoTitle() {
  return (
    <View style={styles.containerLogoTitle}>
      <View style={styles.containeIconSearch}>
        <Ionicons name='md-search' size={24} color={'#4A4A4A'}/>
      </View>

      <TextInput placeholder='Search' style={styles.textInputSearch}/>

      <View style={styles.containeIconClosed}>
       <Ionicons name='md-close' size={24} color={'#4A4A4A'}/>
      </View>
      
    </View>
  );
}

const SearchStack = createNativeStackNavigator();
function SearchStackScreen() {
  return(
    <SearchStack.Navigator>
      <SearchStack.Screen name='Search' component={Search} options={{
        headerTitleAlign: 'center',
        headerTitle: () => <LogoTitle/>
      }}/>
    </SearchStack.Navigator>
  );
};

const MapStack = createNativeStackNavigator();
function MapStackScreen() {
  return(
    <MapStack.Navigator>
      <MapStack.Screen name='Map' component={Map} options={{
        headerTitleAlign: 'center',
        headerTitle: 'Map'
      }}/>
    </MapStack.Navigator>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1,}}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeStackScreen} options={{
          headerShown: false,
          tabBarShowLabel: true,         
          tabBarIcon: (() => {
            return (
              <Ionicons 
              name='md-home'
              size={24}
              color={'#20C065'}
              />
            );
            screenOption
          }),
          
        }}></Tab.Screen>

      <Tab.Screen name='Categories' component={CategoriesStackScreen} options={{
        headerShown: false,
          tabBarLabel: 'Categories',       
          tabBarIcon: (() => {
            return(
              <Ionicons
              name='md-menu'
              size={24}
              color={'#20C065'}
              />
            );
           
          })  
        }}></Tab.Screen>

        <Tab.Screen name='Saved' component={SavedStackStackScreen} options={{
          headerShown: false,
          tabBarLabel: 'Saved',      
          tabBarIcon: (() => {
            return (
              <Ionicons 
              name='md-heart'
              size={24}
              color={'#20C065'}
              />
            );
          })
        }}></Tab.Screen>
        
        <Tab.Screen name='Search' component={SearchStackScreen} options={{
          headerShown: false,
          tabBarLabel: 'Search',    
          tabBarIcon: (() => {
            return (
              <Ionicons 
              name='md-search'
              size={24}
              color={'#20C065'}
              />
            );
          })    
        }}></Tab.Screen>

        <Tab.Screen name='Map' component={Map} options={{
          headerTitleAlign: 'center',
          headerLeft: (() => {
            return (
             <TouchableOpacity>
                <View style={styles.btnOut}>
                  <Image source={require('./assets/img/backArrow.png')}></Image>
                  <Text style={styles.textOut}> Home </Text>
                </View>
             </TouchableOpacity>
            );
          })
        }}>

        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconHeaderContainer: {
    flexDirection: 'row',
  },
  addNewBtn: {
    marginRight: 20,
  },
  containerLogoTitle: {
    flexDirection: 'row',
    width: '90%',
  },
  textInputSearch: {
    width: 260,
    backgroundColor: '#ccc',
    height: 35,
  },
  containeIconSearch: {
    width: 40, 
    height: 35,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    },
  containeIconClosed: {
    width: 40, 
    height: 35,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  btnOut: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  textOut: {
    fontSize: 15,
    fontWeight: '500',
    color: '#20C065'
  }
});

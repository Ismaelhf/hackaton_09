/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tourism from '../componenst/Tourism/Tourism';
import Housing from '../componenst/Housing/Housing';
import Foods from '../componenst/Foods/Foods';
import Podcasts from '../componenst/Podcasts/Podcasts';

import {tourismData} from '../data/tourismData';
import {housingData} from '../data/housingData';
import {foodsData} from '../data/foodsData';
import {podcastsData} from '../data/podcastsData';

const Stack = createStackNavigator();

const Home = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View style={styles.contenedor}>
          <View style={styles.contentPerfil}>
            <Text style={styles.titulo1}>Podcasts</Text>
            <View style={styles.viewImgPerfil}>
              <Image
                style={styles.icon}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkNBaoC3KR3yjqYq7pgkgS2VWtoePq98aGw&usqp=CAU',
                }}
              />
            </View>
          </View>

          <View style={styles.contentIcons}>
            <View style={styles.viewImg}>
              <Image
                style={styles.icon}
                source={{
                  uri:
                    'https://icon-icons.com/icons2/1146/PNG/48/1486485552-338big-emoji-face-happy-smile-smiley_81151.png',
                }}
              />
              <Text>Komedia</Text>
            </View>
            <View style={styles.viewImg}>
              <Image
                style={styles.icon}
                source={{
                  uri:
                    'https://icon-icons.com/icons2/270/PNG/48/Music_29918.png',
                }}
              />
              <Text>Musik</Text>
            </View>
            <View style={styles.viewImg}>
              <Image
                style={styles.icon}
                source={{
                  uri:
                    'https://icon-icons.com/icons2/1880/PNG/48/iconfinder-gamepad-4341293_120527.png',
                }}
              />
              <Text>Games</Text>
            </View>
            <View style={styles.viewImg}>
              <Image
                style={styles.icon}
                source={{
                  uri:
                    'https://cdn.icon-icons.com/icons2/625/PNG/128/newspaper_icon-icons.com_57398.png',
                }}
              />
              <Text>Berita</Text>
            </View>
          </View>
          {/* <ScrollView horizontal={true}>
            <Tourism data={tourismData} navigation={navigation} />
          </ScrollView> */}

          <Text style={styles.titulo}>Populer</Text>
          <View>
            <Podcasts data={podcastsData} navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  contentPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  titulo1: {
    fontWeight: 'bold',
    fontSize: 35,
    marginVertical: 15,
  },
  viewImgPerfil: {
    flex: 1,
    alignItems: 'flex-end',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 15,
  },
  contact: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
    color: 'blue',
    textAlign: 'center',
  },
  contenedor: {
    // marginHorizontal: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: '#56A2DC',
    marginBottom: 10,
  },
  contact: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
    color: '#fff',
    textAlign: 'center',
  },
  contentIcons: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  viewImg: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default Home;

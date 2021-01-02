import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

const Podcasts = ({data, navigation}) => {
  return (
    <>
      {data.map((item) => (
        <View style={styles.conteiner}>
          <View style={styles.contentImg}>
            <View style={styles.viewImg}>
              <Image
                style={styles.mejores}
                source={{
                  uri: item.image,
                }}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Podcasts', {item: {item}})}>
                <Image
                  style={styles.iconPlay}
                  source={{
                    uri:
                      'https://icon-icons.com/icons2/1147/PNG/48/1486486316-arrow-film-movie-play-player-start-video_81236.png',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentText}>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.textDes}>{item.description}</Text>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    width: '100%',
    height: 180,
    backgroundColor: '#F3F1F7',
    borderRadius: 20,
    marginVertical: 5,
    padding: 20,
  },
  contentImg: {
    flexDirection: 'row',
    alignContent: 'space-between',
    marginBottom: 15,
  },
  contentText: {},
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textDes: {
    color: '#B1AFB5',
  },
  viewImg: {
    flex: 1,
  },
  mejores: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  iconPlay: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
export default Podcasts;

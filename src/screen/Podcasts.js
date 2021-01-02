import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';

const Podcasts = ({route}) => {
  const item = route.params.item.item;
  console.warn(item.title);
  return (
    <View style={styles.item}>
      <View style={styles.contentImg}>
        <Image
          style={styles.img}
          source={{
            uri: item.image,
          }}
        />
        <Image
          style={styles.imgLike}
          source={{
            uri:
              'https://icon-icons.com/icons2/2073/PNG/48/heart_like_love_twitter_icon_127132.png',
          }}
        />
      </View>

      <View style={styles.text}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.desp}>{item.description}</Text>
      </View>
      <View style={styles.contentPoints}>
        <View>
          <Text style={styles.titlePoints}>900</Text>
          <Text style={styles.desPoints}>Pengikut</Text>
        </View>
        <View>
          <Text style={styles.titlePoints}>120</Text>
          <Text style={styles.desPoints}>Mengikuti</Text>
        </View>
        <View>
          <Text style={styles.titlePoints}>31</Text>
          <Text style={styles.desPoints}>trek</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 30,
    marginRight: 25,
  },
  imgLike: {
    width: 50,
    height: 50,
    backgroundColor: '#FAE0DE',
    borderRadius: 15,
  },
  text: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    // textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  desp: {
    textAlign: 'justify',
    color: '#9D9BA3',
    fontSize: 18,
  },
  contentPoints: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 30,
  },
  titlePoints: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#117E8D',
  },
  desPoints: {
    marginTop: 5,
    color: '#9D9BA3',
  },
});

export default Podcasts;

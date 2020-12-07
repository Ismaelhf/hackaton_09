import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text,
  ScrollView,
} from 'react-native';

const Tourism = ({data, navigation}) => {
  return (
    <>
      {data.map((item) => (
        <TouchableHighlight
          onPress={() => navigation.navigate('Tourism', {item: {item}})}>
          <View>
            <Text>{item.title}</Text>
            <Image
              style={styles.ciudad}
              source={{
                uri: item.image,
              }}
            />
          </View>
        </TouchableHighlight>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
});
export default Tourism;

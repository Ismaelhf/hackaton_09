import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text,
  ScrollView,
} from 'react-native';

const Foods = ({data, navigation}) => {
  return (
    <>
      {data.map((item) => (
        <View style={styles.listadoItem}>
          <TouchableHighlight
            onPress={() => navigation.navigate('Foods', {item: {item}})}>
            <Image
              style={styles.mejores}
              source={{
                uri: item.image,
              }}
            />
          </TouchableHighlight>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listadoItem: {
    flexBasis: '49%',
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
});
export default Foods;

import React from 'react';
import { Text, View } from '../../components/Themed';
import {StyleSheet, Button} from 'react-native';

const SearchProfiles: React.FC = ({navigation}: any) => {
  return <View style={styles.container}>
      <Text>Hello, world!</Text>
    <Button title="Search" onPress={()=>{
        navigation.navigate('TabTwo');
    }}></Button>
  </View>;
}

export default SearchProfiles;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
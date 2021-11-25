import React from 'react';
import {
  StyleSheet,
  
  Image,

} from 'react-native'

export default function App() {

  return (
    
    <View>
      <Image source={require('./fundo.png')}
        style={styles.fundo}/>

    </View>

  )
}
const styles = StyleSheet.create({

fundo:{
  

}

})

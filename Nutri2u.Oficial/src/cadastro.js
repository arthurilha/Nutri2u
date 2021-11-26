import React, {useState} from 'react';
import { Text,StyleSheet, View , Image, TextInput,TouchableOpacity} from 'react-native'
import { criar } from './Firebase/script';
import Login from './Login';

export default function cadastrar({navigation}) {
  const [email, setEmail] = useState('');
  const [senha1, setSenha1] = useState('');
  
    return(
      <View style={styles.Container}>
        <Image source={require('../assets/favicon.png')}
        style={styles.logo}
        />
        <Text style={styles.logoTexto}>Nutri2u</Text>
        <TextInput 
              placeholder="Email" 
              onChangeText={setEmail} 
              value={email} 
              style={styles.input}
            />
       <TextInput 
              placeholder="Senha" 
              onChangeText={setSenha1} 
              value={senha1} 
              style={styles.input}
              secureTextEntry={true}
            />
      <TouchableOpacity style={styles.botao} 
         onPress={()=>{criar(email,senha1)}}
        >
        <Text style={styles.botaoTexto}>Cadastrar</Text>

      </TouchableOpacity>
        
        <Text style={ styles.cadastro}>
        Para logar,  
        <Text style={styles.link}
       onPress={()=>navigation.navigate(Login)}
       >
         clique aqui!
        </Text>

        </Text>
      </View>
  )
 }


const styles = StyleSheet.create({
    Container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#97dc26"

    },
    logo:{
      marginTop: -40,
      width:250,
      height:300,
     
    },

    input:{
      marginTop:10,
      height:60,
      padding:10,
      width:300,
      backgroundColor:"#fff",
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius:10,
      

    },
    botao:{
      width:150,
      height:60,
      backgroundColor:'#2CB039',
      marginTop:50,
      borderRadius:10,
      alignItems:'center',
      justifyContent:  'center'
      },
      botaoTexto:{
          fontSize:16,
          fontWeight:'bold',
          color:'#fff'
      },
      logoTexto:{
        marginTop:-80,
        fontSize:70,
        fontWeight:'bold',
        color:'#fff'
      },
      cadastro:{
        marginTop:30,
        fontSize:13,
        fontWeight:'bold',
        color:'#fff'
      },
      link:{
        color:'#2CB039'
      }


})
import React, {useState} from 'react';
import { Text,StyleSheet, View , Image, TextInput,TouchableOpacity} from 'react-native'
import Nutri2u from './Nutri2u'
import cadastrar from './cadastro'
import { logar } from './Firebase/script';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
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
              onChangeText={setSenha} 
              value={senha} 
              style={styles.input}
              secureTextEntry={true}
            />
      <TouchableOpacity style={styles.botaoc} 
        onPress={()=>{logar(email,senha)}}
        >
        <Text style={styles.botaoTexto}>confirmar dados</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} 
        onPress={()=>navigation.navigate(Nutri2u)}
        >
        <Text style={styles.botaoTexto}>Login</Text>

      </TouchableOpacity>
      

      <Text style={ styles.cadastro}>
        Se você não for cadastrado,  
        <Text style={styles.link}
       onPress={()=>navigation.navigate(cadastrar)}
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
      marginTop:30,
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
      },
      botaoc:{
        width:150,
      height:30,
      backgroundColor:'#2CB039',
      marginTop:10,
      borderRadius:10,
      alignItems:'center',
      justifyContent:  'center'

      }
      


})
import React from 'react';
import {
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View,
 Image
} from 'react-native';

export default class TMB extends React.Component {
     
    
  
  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,idade: 0, atividade: 0, sexo: 0, resultado:0}
    this.calcular = this.calcular.bind(this)
  }
  calcular(){
   
   let s = this.state
   
//se for homem:

   if(s.sexo == 1){
    let basalH = (66+ (s.massa * 13.7) + (5.0* s.altura)-(6.8 * s.idade))
    s.resultado = basalH
    
    }
    

// se for mulher
    else
    {
        let basalF = (665+ (s.massa *9.6) + (1.8* s.altura)-(4.7* s.idade))
        s.resultado= basalF 
    
    }
     
   

     
    this.setState(s)

   
}

  

  render() {
    return (
      
       
      <View style={styles.container}>
          
        <View style={styles.entrada}>
          <TextInput autoCapitalize="none" placeholder="Sexo"  keyboardType="numeric" style={styles.input0} onChangeText={(sexo)=>{this.setState({sexo})}}/>
          <TextInput autoCapitalize="none" placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
          </View>
          <View style={styles.entrada1}>
          <TextInput autoCapitalize="none" placeholder="Massa"  keyboardType="numeric" style={styles.input1} onChangeText={(massa)=>{this.setState({massa})}}/>
          <TextInput autoCapitalize="none" placeholder="Idade"  keyboardType="numeric" style={styles.input1} onChangeText={(idade)=>{this.setState({idade})}}/>

        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttontext}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
       
        <Image
              source={require('./tabela.png')}
              style={styles.ImagemBotao}
            />
        
          
    </View>
    
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  entrada:{
    flexDirection:'row',
  },
  entrada1:{
    flexDirection:'row',
  },
  input0:{
    height:100,
    marginLeft: 20,
    width:"50%",
    fontSize:50,
    
  },
  input:{
    height:100,
    width:"50%",
    fontSize:50,
    
    
  },
  input1:{
    height:100,
    marginLeft:15,
    width:"50%",
    fontSize:50,
    marginTop:20,
  },
  button:{
   backgroundColor:"#97dc26",
   
  },
  buttontext:{
    textAlign:"center",
    padding:30,
    fontSize:25,
    fontWeight:'bold',
    color:"#fff",
  },
  resultado:{
    alignSelf:"center",
    color:"#97dc26",
    fontSize:50,
    fontWeight:'bold',
    padding: 10,
  },
  ImagemBotao: {
    alignSelf:"center",
    height: 200,
    width: 400
  },
  
 
});







    


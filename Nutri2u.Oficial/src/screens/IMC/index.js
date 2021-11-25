import React from 'react';
import {
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 Image,
 View
} from 'react-native';

export default class IMC extends React.Component {
     
    
  
  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }
  calcular(){
   let imc = this.state.massa / (this.state.altura * this.state.altura)
   let s = this.state
   s.resultado = imc
   if(s.resultado < 16){
     s.resultadoText =' Progresso: Muito abaixo do peso'
   }
    else if (s.resultado < 17){
     s.resultadoText =' Progresso: Moderadamente abaixo do peso'
    }
    else if (s.resultado < 18.5){
     s.resultadoText =' Progresso: Abaixo do peso'
    }
    else if (s.resultado < 25) {
     s.resultadoText =' Progresso: Saudavel'
    }
    else if (s.resultado < 30) {
     s.resultadoText =' Progresso: Sobrepeso'
    }
    else if (s.resultado < 35) {
     s.resultadoText =' Progresso: Obesidade Grau 1°'
    }
    else if (s.resultado < 40) {
      s.resultadoText =' Progresso: Obesidade Grau 2°'
    }
    else if (s.resultado < 50) {
      s.resultadoText =' Progresso: Obesidade Grau 3°'
    }
    else{
      s.resultadoText ='Insira os dados novamente, por favor.'
    }
   this.setState(s)

   

  }

  render() {
    return (
      
       
      <View style={styles.container}>
        <View style={styles.entrada}>
          <TextInput autoCapitalize="none" placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput autoCapitalize="none" placeholder="Massa"  keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttontext}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado,{fontSize:20}]}>{this.state.resultadoText}</Text>
        
         
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
  input:{
    height:100,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    
  },
  button:{
   backgroundColor:"#97dc26",
   
  },
  buttontext:{
    textAlign:"center",
    padding:30,
    fontSize:30,
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
    margin:40,
    height: 230,
    width: 400
  }
 
});







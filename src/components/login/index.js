import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import firebase from '../../services/firebaseConnection';

export default function Login({ changeStatus }){
    const [ type, setType ] = useState('login');

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    function handleLogin(){
        
        if( type === 'login' ){
            //fazemos o login
            const user = firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user)=>{
                changeStatus(user.user.uid)
            })
            .catch((error)=>{
                console.log(error)
                alert('Ooops, parece que deu algum erro')
                return;
            })
        }else{
            //cadastramos o usuario
            const user = firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((user)=>{
                changeStatus(user.user.uid)
            })
            .catch((error) => {
                console.log(error)
                alert('Ooops, parece que deu algo de errado')
                return;
            })
        }

    }

  return(
    <SafeAreaView style={styles.container}>
      <TextInput 
        placeholder="Seu email"
        style={styles.input}
        value={email}
        onChangeText={(text)=>setEmail(text)}
      />

    <TextInput 
        placeholder="*****"
        style={styles.input}
        value={password}
        onChangeText={(text)=>setPassword(text)}
      />

      <TouchableOpacity
        style={[styles.handleLogin, { backgroundColor: type ==='login' ? '#3ea692' : '#141414' }]}
        onPress={ handleLogin }
      >
          <Text style={styles.loginText}>
              { type === 'login' ? 'Acessar' : 'Cadastrar'}
          </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> setType(type =>  type === 'login' ? 'cadastrar' : 'login' )}>
          <Text style={{textAlign:'center'}}>
              { type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta' }
          </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:50,
    backgroundColor:'#f2f6fc',
    paddingHorizontal:10
  },
  input:{
      marginBottom:10,
      backgroundColor:'#fff',
      borderRadius:4,
      height: 45,
      padding: 10,
      borderWidth:1,
      borderColor:'#141414'
  },
  handleLogin:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#141414',
      height: 45,
      marginBottom:10,
  },
  loginText:{
      color:'#fff',
      fontSize:16,
  }
})
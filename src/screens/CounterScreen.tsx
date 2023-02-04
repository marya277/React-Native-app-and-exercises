import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { Fab } from '../components/Fab';
export const CounterScreen = () => {
const [contador, setContador] = useState(10)
  return (
    <View style={styles.container}>
            <Text style={styles.title}> 
            Contador: {contador}</Text>
            <Fab  
            title='+1'
            onPress={()=>setContador(contador +1)}
            />
            <Fab  
            title='-1'
            position='bl'
            onPress={()=>setContador(contador -1)}
            />
{/*<TouchableOpacity
            style={styles.fabLocationBL}
            onPress={()=>setContador(contador -1)}
            
            >
                <View style={styles.fab} >
                <Text style={styles.fabText}>- 1</Text>
                </View>
  </TouchableOpacity>*/}
            </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#AED6F1',
        justifyContent:'center'
    },
    title:{
        fontSize:40,
        textAlign:'center',
        top:-15
    }
})
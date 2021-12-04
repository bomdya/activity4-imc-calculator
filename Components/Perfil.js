import React, {Component} from 'react';
import {Image, View, Text, Button, StyleSheet, Modal} from 'react-native';



export default class PerfilModal extends Component{
  
    constructor (props){
        super(props);
        this.state = {isVisible: false};
    }
  
   render(){
    let figura = {uri:'https://media0.giphy.com/media/mIWNrDMubLj6jt28ao/giphy.gif'}
  
    return (  
        <View style={styles.container} onLayout={()=>{this.setState({isVisible:true})}}>
            
            <Modal
                animationType={'none'}
                transparent={false}
                visible={this.state.isVisible}
                onRequestClose={()=>{({isVisible:false}); 
            }}>

                    <View style={styles.modal} >
                        <Image source={figura} style={{width:150, height:150, marginBottom:10}}/>
                            <Text style={{padding:20}}>
                                <h3>Nome: Dya {this.setState.nome} </h3>
                            </Text>
                        
                            <Text>
                                <h3>Idade: 20 {this.setState.idade}</h3>
                            </Text>

                            <Text>
                                <h3>E-mail: dya@gmail.com {this.setState.email}</h3>
                            </Text>
                              
                          <Button title = 'Ir para home' onPress={()=>this.props.navigation.navigate('Home')}/>    
        
                    </View>
                

            </Modal>

            
           


                
        </View>
      
      )    
    }
    
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        modal:{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#c7ddf0',
            padding: 50,
            borderRadius: 20
          
        }
    }
)


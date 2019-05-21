import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,AppRegistry, Image,ActivityIndicator  } from 'react-native'

class List extends Component {

   state = {
      names: [
         {
            id: 0,
            name: 'Ben'
         },
         {
            id: 1,
            name: 'Susan',
         },
         {
            id: 2,
            name: 'Robert',
         },
         {
            id: 3,
            name: 'Mary',
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }


   componentDidMount(){
       return fetch('https://facebook.github.io/react-native/movies.json')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson.movies,
           }, function(){

           });

         })
         .catch((error) =>{
           console.error(error);
         });
     }



   render() {
      return (
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                      style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>



                     <View style={{flex: 1, flexDirection: 'row'}}>

        <View style={{ width: 100,height: 100, backgroundColor: 'powderblue'}} >
        <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg", isStatic: true}} style={{width: 100, height: 100}}/>

        </View>

         <View style={{flex: 1,height: 100, flexDirection: 'column'}}>

         <View style={{ flex: 1, backgroundColor: 'skyblue'}} >
         <Text style = {styles.wordBold}>{item.name}</Text>
         </View>

         <View style={{ flex: 1, backgroundColor: 'steelblue'}} >
         <Text style = {styles.text}>{item.name}</Text>
         </View>

          <View style={{flex: 1, flexDirection: 'row'}}>

          <View style={{ flex: 1, backgroundColor: 'green'}} >
          <Text style = {styles.text}>{item.name}</Text>
          </View>

          <View style={{ flex: 1, backgroundColor: 'yellow'}} >
          <Text style = {styles.text}>{item.name}</Text>
          </View>


          </View>

         </View>

      </View>


                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop:5,
      height:100,
      alignItems: 'center',
   },
   text: {
      color: '#4f603c',
      paddingLeft:5,
      alignItems:'baseline'
   },
   wordBold: {
     fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      paddingLeft:5
   }
})

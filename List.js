import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,AppRegistry, Image,ActivityIndicator,FlatList  } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";


class List extends Component {
   alertItemName = (item) => {
      alert(item.name)
   }

   constructor(props) {
       super(props);

       this.state = {
         loading: true,
         refreshing: false,
         states : {},
       };
     }


   componentDidMount(){
       return fetch('http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=54acea37ea804f3eafc2404736bafca3')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             loading: false,
             dataSource: responseJson.results,
           }, function(){


           });

         })
         .catch((error) =>{
           console.error(error);
         });
     }



   render() {

     if (this.state.loading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
   }

      return (
         <View>

         <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>
          <TouchableOpacity
             key = {item.id}
              style = {styles.container}
            >
             <View style={{flex: 1, flexDirection: 'row'}}>

  <View style={{ width: 100,height: 100, backgroundColor: 'powderblue'}} >
  <Image source={{uri: item.media[0]["media-metadata"][0].url, isStatic: true}} style={{width: 100, height: 100}}/>

  </View>

  <View style={{flex: 1,height: 100, flexDirection: 'column'}}>

  <View style={{ flex: 2, backgroundColor: 'skyblue'}} >
  <Text style = {styles.wordBold}>{JSON.stringify(item.title)}</Text>
  </View>

  <View style={{ flex: 1, backgroundColor: 'steelblue'}} >
  <Text style = {styles.text}>{item.byline}</Text>
  </View>

  <View style={{flex: 1, flexDirection: 'row'}}>

  <View style={{ flex: 1, backgroundColor: 'green'}} >
  <Text style = {styles.text}>{item.source}</Text>
  </View>

  <View style={{ flex: 1, backgroundColor: 'yellow'}} >
  <Text style = {styles.text}>{item.published_date}</Text>
  </View>


  </View>

  </View>

  </View>


          </TouchableOpacity>

        }
        />



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
     fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
      paddingLeft:5
   }
})

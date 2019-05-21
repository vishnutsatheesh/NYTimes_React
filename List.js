import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,AppRegistry, Image,ActivityIndicator,FlatList  } from 'react-native'

class List extends Component {





   alertItemName = (item) => {
      alert(item.name)
   }

   constructor(props) {
       super(props);

       this.state = {
         loading: true,
         data: [],
         page: 1,
         seed: 1,
         error: null,
         refreshing: false,
         states : {
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
         },
       };
     }
   componentDidMount(){
       return fetch('http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=54acea37ea804f3eafc2404736bafca3')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             loading: false,
             dataSource: responseJson.results,
             states : {
                names: [
                   {
                      id: 0,
                      name: 'Ben'
                   },
                   {
                      id: 1,
                      name: 'Susanccccccccc',
                   },
                   {
                      id: 2,
                      name: 'Robertccccc',
                   },
                   {
                      id: 3,
                      name: 'Marddwy',
                   }
                ]
             },

           }, function(){


            // this.setview();

           });

         })
         .catch((error) =>{
           console.error(error);
         });
     }



   render() {

     if (this.state.loading) {
     return (
       <View style={{flex: 1, paddingTop: 20, backgroundColor: "red"}}>
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
             onPress = {() => this.alertItemName(item.id)}>
             <View style={{flex: 1, flexDirection: 'row'}}>

  <View style={{ width: 100,height: 100, backgroundColor: 'powderblue'}} >
  <Image source={{uri: "https://cdn-images-1.medium.com/max/1200/0*Qup3L7adSA8iZO_R.png", isStatic: true}} style={{width: 100, height: 100}}/>

  </View>

  <View style={{flex: 1,height: 100, flexDirection: 'column'}}>

  <View style={{ flex: 2, backgroundColor: 'skyblue'}} >
  <Text style = {styles.wordBold}>{item.title}</Text>
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

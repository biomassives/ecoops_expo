import React, { Component } from 'react';

import { Text, View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import data from './data.json';


const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    backgroundColor: '#eca513',
    alignItems: 'center',
    justifyContent: 'center',
          
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.88,
  },
  text1: {
    backgroundColor: '#48ef9c',

    fontWeight: 'bold',
  },
  callout: {
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  }
});



class MapApp extends Component {
  dragEnded = (e) => {
    console.log("clicked");
  };

  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.text1}
> ❁❁ Eco Ops App ❁❁</Text>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -1.5199429,
            longitude: 37.2677612,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {data.map((loc) => (
            <Marker
              key={loc.id}
              coordinate={{ latitude: loc.lat, longitude: loc.lng }}
              image={
                loc.type == 'hospital'
                  ? require('./assets/hosp.png')
                  : require('./assets/green.png')
              }
              description={loc.desc}
              draggable
              onDragEnd={this.dragEnded}>
              <Callout tooltip style={styles.callout}>
                <View>
                  <Text style={styles.title}> {loc.desc}</Text>
                </View>
              </Callout>


            </Marker>
          ))}
        
        </MapView>
        <Text> Log your activities ### Opportunity log</Text>

      </View>
    );
  }
}

export default MapApp;


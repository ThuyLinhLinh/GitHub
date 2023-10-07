import React from 'react';
import { View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const YourComponent = () => {
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const markerCoordinate = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={markerCoordinate}
          title="Marker Title"
          description="Marker Description"
        >
          <Image source={require('../assets/hinh10.jpg')} style={{ width: 40, height: 40 }} />
        </Marker>
      </MapView>
    </View>
  );
};

export default YourComponent;

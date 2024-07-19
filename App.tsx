import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import ErrorBoundary from './ErrorBoundary.tsx';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: '#029192',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function TestScreen() {
  return (
    <View style={styles.screen}>
      <Text>{`V8 version is ${
        global._v8runtime ? global._v8runtime().version : 'NULL'
      }`}</Text>
    </View>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Article" component={TestScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Drawer" component={MyDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
}

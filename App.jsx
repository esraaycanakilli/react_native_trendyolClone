import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import RootNavigator from './src/router/rootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store';

const App = () => {
    useEffect(() => {
        RNBootSplash.hide(); // Splash Screen'i gizle
    }, []);

    return (
        <Provider store={store}>
            <NavigationContainer>
          <RootNavigator/>
        </NavigationContainer>
        </Provider>
    );
};

export default App;

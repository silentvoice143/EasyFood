// ProtectedRoute.js
import React from 'react';
import {View, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';

const ProtectedRoute = ({component: Component, navigation, ...rest}: any) => {
  const isAuthenticated = useAppSelector(state => state.auth.token);

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigation.reset({
        index: 0, // Set the index to 0 to start at the first route in the stack
        routes: [
          {
            name: 'vendorRoute', // The name of your nested navigator
            state: {
              routes: [{name: 'login'}], // The screen inside 'vendorRoute' you want to navigate to
            },
          },
        ],
      });
    }
  }, [isAuthenticated, navigation]);

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

export default ProtectedRoute;

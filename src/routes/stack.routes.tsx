import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Events } from '../screens/Events';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name="Home"
                options={{
                    headerShown: false,
                }}
                component={Home}
                />

            <Screen
                name="Events"
                options={{
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#131016',
                    },
                    headerTintColor:'white',
                }}
                component={Events} 
            />
        </Navigator>
    )
}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';
import { CountriesListScreen } from '@/features/countries/screens/CountriesListScreen';
import { CountryDetailScreen } from '@/features/countries/screens/CountriesDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#EAD1CB' },
          headerTitleStyle: { fontWeight: '600' },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="CountriesList"
          component={CountriesListScreen}
          options={{ title: 'Countries', headerTintColor: '#000000' }}
        />
        <Stack.Screen
          name="CountryDetail"
          component={CountryDetailScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

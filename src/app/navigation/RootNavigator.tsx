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
          headerStyle: { backgroundColor: '#a39e9eff' },
          headerTitleStyle: { fontWeight: '600' },
        }}>
        <Stack.Screen
          name="CountriesList"
          component={CountriesListScreen}
          options={{ title: 'Countries' }}
        />
        <Stack.Screen
          name="CountryDetail"
          component={CountryDetailScreen}
          options={{ title: 'Country detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React, { useMemo, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Screen } from '@/core/ui/Screen';
import { useCountries } from '../hooks/useCountries';
import { CountryFilters } from '../components/CountryFilters';
import { CountryCard } from '../components/CountryCard';
import type { CountryFilterState } from '../api/countries.types';
import { filterCountries } from '../utils/countries.filters';
import { useNavigation, type NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  CountryDetail: { code: string };
};

export function CountriesListScreen() {
  const [filters, setFilters] = useState<CountryFilterState>({
    search: '',
    continent: '',
    currency: '',
  });

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { countries, loading, error } = useCountries();

  const uniqueContinents = useMemo(
    () => Array.from(new Set(countries.map((c) => c.continent.name).filter(Boolean))),
    [countries]
  );

  const uniqueCurrencies = useMemo(
    () =>
      Array.from(new Set(countries.map((c) => c.currency).filter((c): c is string => Boolean(c)))),
    [countries]
  );

  const filteredCountries = useMemo(
    () => filterCountries(countries, filters),
    [countries, filters]
  );

  if (loading) {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center">
          <Text className="text-white">Cargando países...</Text>
        </View>
      </Screen>
    );
  }

  if (error) {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center">
          <Text className="text-red-400">Error al obtener países</Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <CountryFilters
        filters={filters}
        setFilters={setFilters}
        uniqueContinents={uniqueContinents}
        uniqueCurrencies={uniqueCurrencies}
      />

      <FlatList
        data={filteredCountries}
        className="flex-1"
        keyExtractor={(item) => item.code}
        ItemSeparatorComponent={() => <View className="h-2" />}
        renderItem={({ item }) => (
          <CountryCard
            country={item}
            onPress={(country) => navigation.navigate('CountryDetail', { code: country.code })}
          />
        )}
      />
    </Screen>
  );
}

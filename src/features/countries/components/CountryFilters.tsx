import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import type { CountryFilterState } from '../api/countries.types';

interface CountryFiltersProps {
  filters: CountryFilterState;
  setFilters: React.Dispatch<React.SetStateAction<CountryFilterState>>;
  uniqueContinents: string[];
  uniqueCurrencies: string[];
}

export const CountryFilters: React.FC<CountryFiltersProps> = ({
  filters,
  setFilters,
  uniqueContinents,
  uniqueCurrencies,
}) => {
  return (
    <View className="mx-3 mb-4 rounded-2xl border border-slate-800 bg-gray-100 p-3">
      <View className="mb-3">
        <Text className="mb-1 text-xs text-slate-300">Buscar país</Text>
        <View className="flex-row items-center rounded-xl bg-white px-3">
          <TextInput
            placeholder="Search country..."
            placeholderTextColor="#64748b"
            value={filters.search}
            onChangeText={(text) => setFilters((prev) => ({ ...prev, search: text }))}
            className="flex-1 py-2 text-slate-100"
          />
        </View>
      </View>

      <View className="flex-row gap-3">
        <View className="flex-1">
          <Text className="mb-1 text-xs text-slate-300">Continent</Text>
          <View className="overflow-hidden rounded-xl bg-white">
            <Picker
              selectedValue={filters.continent}
              onValueChange={(value) => setFilters((prev) => ({ ...prev, continent: value }))}
              dropdownIconColor="#e5e7eb">
              <Picker.Item label="All Continents" value="" />
              {uniqueContinents.map((c) => (
                <Picker.Item key={c} label={c} value={c} />
              ))}
            </Picker>
          </View>
        </View>
        <View className="flex-1">
          <Text className="mb-1 text-xs text-slate-300">Currency</Text>
          <View className="overflow-hidden rounded-xl bg-white">
            <Picker
              selectedValue={filters.currency}
              onValueChange={(value) => setFilters((prev) => ({ ...prev, currency: value }))}
              dropdownIconColor="#e5e7eb">
              <Picker.Item label="All Currencies" value="" />
              {uniqueCurrencies.map((c) => (
                <Picker.Item key={c} label={c} value={c} />
              ))}
            </Picker>
          </View>
        </View>
      </View>
    </View>
  );
};

import React from 'react';
import { View, TextInput, Text, Platform } from 'react-native';
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
    <View className="-mt-16 mb-4 p-3">
      <View className="mb-3">
        <Text className="mb-1 text-[11px] font-semibold text-slate-700">Buscar país</Text>
        <View
          className="relative flex-row items-center rounded-xl border border-slate-200 bg-white px-3 shadow-sm"
          style={{ height: Platform.OS === 'android' ? 56 : 48 }}>
          {/* Custom placeholder so we can control fontSize independently */}
          {(!filters.search || filters.search === '') && (
            <Text
              style={{
                position: 'absolute',
                left: 12,
                top: '50%',
                transform: [{ translateY: -8 }],
                fontSize: 12,
                color: '#94a3b8',
              }}>
              Search country...
            </Text>
          )}

          <TextInput
            // keep placeholder empty because we render a custom one
            placeholder=""
            value={filters.search}
            onChangeText={(text) => setFilters((prev) => ({ ...prev, search: text }))}
            className="h-full flex-1 text-sm text-slate-900"
            style={{ paddingVertical: 0 }}
          />
        </View>
      </View>

      <View className="flex-row gap-3">
        <View className="flex-1">
          <Text className="mb-1 text-[11px] font-semibold text-slate-700">Continent</Text>
          <View
            className="justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            style={{ height: Platform.OS === 'android' ? 56 : 48 }}>
            <Picker
              selectedValue={filters.continent}
              onValueChange={(value) => setFilters((prev) => ({ ...prev, continent: value }))}
              dropdownIconColor="#64748b"
              style={{
                height: Platform.OS === 'android' ? 56 : 48,
                width: '100%',
                fontSize: 12,
                paddingVertical: 0,
              }}
              itemStyle={{
                height: Platform.OS === 'android' ? 56 : 48,
                fontSize: 12,
                lineHeight: Platform.OS === 'android' ? 40 : 36,
              }}>
              <Picker.Item label="All Continents" value="" />
              {uniqueContinents.map((c) => (
                <Picker.Item key={c} label={c} value={c} />
              ))}
            </Picker>
          </View>
        </View>
        <View className="flex-1">
          <Text className="mb-1 text-[11px] font-semibold text-slate-700">Currency</Text>
          <View
            className="justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            style={{ height: Platform.OS === 'android' ? 56 : 48 }}>
            <Picker
              selectedValue={filters.currency}
              onValueChange={(value) => setFilters((prev) => ({ ...prev, currency: value }))}
              dropdownIconColor="#64748b"
              style={{
                height: Platform.OS === 'android' ? 56 : 48,
                width: '100%',
                fontSize: 12,
                paddingVertical: 0,
              }}
              itemStyle={{
                height: Platform.OS === 'android' ? 56 : 48,
                fontSize: 12,
                lineHeight: Platform.OS === 'android' ? 40 : 36,
              }}>
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

import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { MapPin, Banknote, ChevronRight } from 'lucide-react-native';
import type { Country } from '../api/countries.types';

interface CountryCardProps {
  country: Country;
  onPress: (country: Country) => void;
}

export const CountryCard: React.FC<CountryCardProps> = ({ country, onPress }) => {
  return (
    <Pressable
      onPress={() => onPress(country)}
      className="mx-3 flex-row items-center space-x-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
      style={{ minHeight: 80 }}
      android_ripple={{ color: '#e6e9ee' }}>
      <View
        className="
          shadow-inner h-16 w-16 items-center
          justify-center rounded-full
          bg-slate-50
        ">
        <Text className="text-4xl">{country.name[0] || '🌍'}</Text>
      </View>
      <View className="ml-3 min-w-0 flex-1 justify-center">
        <Text className="text-lg font-bold text-slate-800" numberOfLines={1} ellipsizeMode="tail">
          {country.name}
        </Text>

        <View className="mt-1 flex-row items-center space-x-2">
          <View className="rounded-full bg-blue-50 px-2 py-0.5">
            <Text className="text-xs font-medium text-blue-700">{country.code}</Text>
          </View>
        </View>
        <View className="mt-2 flex-row items-center space-x-4">
          <View className="flex-row items-center space-x-1">
            <MapPin size={12} color="#64748b" />
            <Text className="text-xs text-slate-500">{country.continent.name}</Text>
          </View>
          {country.currency && (
            <View className="flex-row items-center space-x-1">
              <Banknote size={12} color="#64748b" />
              <Text className="text-xs text-slate-500">{country.currency.split(',')[0]}</Text>
            </View>
          )}
        </View>
      </View>
      <ChevronRight size={20} color="#CBD5E1" />
    </Pressable>
  );
};

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Screen } from '@/core/ui/Screen';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/app/navigation/types';
import { useCountryDetails } from '../hooks/useCountryDetails';
import { CountryHlsPlayer } from '../components/CountryHlsPlayer';

type Props = NativeStackScreenProps<RootStackParamList, 'CountryDetail'>;

export function CountryDetailScreen({ route }: Props) {
  const { code } = route.params;
  const { country, loading, error } = useCountryDetails(code);

  if (loading) {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center">
          <Text className="text-slate-700">Cargando país...</Text>
        </View>
      </Screen>
    );
  }

  if (error || !country) {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center px-4">
          <Text className="text-center text-sm font-medium text-red-500">
            Error al obtener la información del país
          </Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScrollView className="flex-1" contentContainerClassName="px-4 pb-8 pt-2 gap-4">
        <View className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <View className="mb-4 flex-row items-center gap-3">
            <View className="h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <Text className="text-2xl">{country.name[0] ?? '🌍'}</Text>
            </View>

            <View className="flex-1">
              <Text className="text-lg font-semibold text-slate-900">{country.name}</Text>
              <View className="mt-1 self-start rounded-full bg-blue-50 px-2 py-0.5">
                <Text className="text-[11px] font-semibold text-blue-700">
                  Código: {country.code}
                </Text>
              </View>
            </View>
          </View>
          <View className="mt-1 gap-3">
            <Row label="Continent" value={country.continent.name} />
            <Row label="Capital" value={country.capital ?? 'Not available'} />
            <Row label="Currency" value={country.currency ?? 'Not available'} />
            <Row
              label="Languages"
              value={
                country.languages?.length
                  ? country.languages.map((l) => l.name).join(', ')
                  : 'No disponible'
              }
            />
          </View>
        </View>
        <CountryHlsPlayer title={`Video related to ${country.name}`} />
      </ScrollView>
    </Screen>
  );
}

interface RowProps {
  label: string;
  value: string;
}

function Row({ label, value }: RowProps) {
  return (
    <View className="flex-row items-start justify-between gap-4">
      <Text className="mt-0.5 text-xs font-medium text-slate-500">{label}</Text>
      <Text className="flex-1 text-right text-sm font-semibold text-slate-900">{value}</Text>
    </View>
  );
}

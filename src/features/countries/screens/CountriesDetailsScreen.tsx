import React from 'react';
import { Text, View } from 'react-native';
import { Screen } from '@/core/ui/Screen';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/app/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'CountryDetail'>;

export function CountryDetailScreen({ route }: Props) {
  const { code } = route.params;

  return (
    <Screen>
      <View className="gap-3">
        <Text className="text-2xl font-semibold text-white">Country detail</Text>
        <Text className="text-slate-300">
          Código del país: <Text className="font-semibold">{code}</Text>
        </Text>
      </View>
    </Screen>
  );
}

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenProps {
  children: React.ReactNode;
}
export function Screen({ children }: ScreenProps) {
  return <SafeAreaView className="flex-1">{children}</SafeAreaView>;
}

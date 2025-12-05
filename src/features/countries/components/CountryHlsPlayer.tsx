import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

interface CountryHlsPlayerProps {
  title?: string;
}

const HLS_URL = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

export function CountryHlsPlayer({ title }: CountryHlsPlayerProps) {
  const player = useVideoPlayer(HLS_URL, (playerInstance) => {
    playerInstance.loop = false;
  });

  const [, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [, setCurrentTime] = useState(0);

  useEffect(() => {
    const subscriptionPlaying = player.addListener('playingChange', (payload) => {
      setIsPlaying(payload.isPlaying);
    });

    const subscriptionTime = player.addListener('timeUpdate', (event) => {
      setCurrentTime(event.currentTime);
      if (player.duration > 0 && player.duration !== duration) {
        setDuration(player.duration);
      }
    });

    return () => {
      subscriptionPlaying.remove();
      subscriptionTime.remove();
    };
  }, [player, duration]);

  return (
    <View className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-3">
      <Text className="mb-2 text-sm font-semibold text-slate-100">
        {title ?? 'Reproductor HLS'}
      </Text>
      <VideoView
        style={{
          width: '100%',
          aspectRatio: 16 / 9,
          borderRadius: 12,
        }}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
    </View>
  );
}

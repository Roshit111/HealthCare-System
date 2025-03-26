import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';

export default function CustomStatusBar() {
  const colorScheme = useColorScheme();
  
  return (
    <StatusBar 
      style={colorScheme === 'dark' ? 'light' : 'dark'}
      backgroundColor={colorScheme === 'dark' ? '#103D66' : '#2a7fba'}
      translucent={false}
    />
  );
}
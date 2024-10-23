import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container} accessible={true} accessibilityLabel="Error screen" accessibilityHint="Informs the user that the requested page is unavailable">
        <ThemedText type="title" accessibilityRole="header">
          This screen doesn't exist.
        </ThemedText>
        <Link 
          href="/" 
          style={styles.link} 
          accessibilityLabel="Go to home screen"
          accessibilityHint="Double-tap to return to the home screen"
        >
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

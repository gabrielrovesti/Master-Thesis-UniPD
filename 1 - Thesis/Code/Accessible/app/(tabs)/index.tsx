import { View, Text, ScrollView, Switch, StyleSheet, Pressable } from 'react-native';
import { Link, Stack } from 'expo-router';
import { useState } from 'react';

export default function HomeScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [daltonismMode, setDaltonismMode] = useState(false);
  const [dyslexiaMode, setDyslexiaMode] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <View style={styles.header}>
        <Text 
          style={styles.title}
          accessibilityRole="header"
          accessibilityLabel="Welcome to accessibility testing">
          Welcome to accessibility testing
        </Text>
      </View>

      <View style={styles.content}>
        <Text 
          style={styles.description}
          accessibilityLabel="Discover how to make React Native components accessible to all users. Through practical examples and guided testing, learn essential techniques for creating inclusive applications.">
          Discover how to make React Native components accessible to all users. 
          Through practical examples and guided testing, learn essential techniques 
          for creating inclusive applications.
        </Text>

        <Link 
          href={{ 
            pathname: "/testing",
          } as any}
          asChild>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Start testing accessibility features"
            accessibilityHint="Navigate to testing section">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Start testing</Text>
            </View>
          </Pressable>
        </Link>

        <View style={styles.modesSection}>
          <Text 
            style={styles.modesTitle}
            accessibilityRole="header">
            Other modes:
          </Text>

          <View style={styles.modeRow}>
            <Text>Dark mode</Text>
            <Switch
              accessibilityLabel="Toggle dark mode"
              accessibilityRole="switch"
              accessibilityState={{ checked: darkMode }}
              onValueChange={setDarkMode}
              value={darkMode}
            />
          </View>

          <View style={styles.modeRow}>
            <Text>Daltonism mode</Text>
            <Switch
              accessibilityLabel="Toggle color blindness mode"
              accessibilityRole="switch"
              accessibilityState={{ checked: daltonismMode }}
              onValueChange={setDaltonismMode}
              value={daltonismMode}
            />
          </View>

          <View style={styles.modeRow}>
            <Text>Dyslexia mode</Text>
            <Switch
              accessibilityLabel="Toggle dyslexia friendly mode"
              accessibilityRole="switch"
              accessibilityState={{ checked: dyslexiaMode }}
              onValueChange={setDyslexiaMode}
              value={dyslexiaMode}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      padding: 16,
      paddingTop: 48,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    content: {
      padding: 16,
      gap: 24,
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 24,
    },
    button: {
      backgroundColor: '#000',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    modesSection: {
      gap: 16,
    },
    modesTitle: {
      fontSize: 16,
      fontWeight: '600',
    },
    modeRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
});
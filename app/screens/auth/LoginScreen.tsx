import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { COLORS, SHADOWS } from '@/app/theme/theme';
import { ThemedText } from '@/components/ThemedText';
import { auth } from '@/app/config/firebase';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID', // Get this from Firebase Console
});

export default function LoginScreen() {
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const credential = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(auth, credential);
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>Dhaoa-Din</ThemedText>
        <ThemedText style={styles.subtitle}>
          Join forces to keep our streets flowing
        </ThemedText>
      </View>

      <TouchableOpacity 
        style={styles.googleButton}
        onPress={signInWithGoogle}
      >
        {/* <Image 
          source={require('@/assets/google-icon.png')} 
          style={styles.googleIcon}
        /> */}
        <ThemedText style={styles.buttonText}>
          Continue with Google
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.grey,
    textAlign: 'center',
  },
  googleButton: {
    ...SHADOWS.medium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 20,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
  },
}); 
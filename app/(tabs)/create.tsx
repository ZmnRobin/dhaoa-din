import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { router } from 'expo-router';
import { COLORS, SHADOWS } from '@/app/theme/theme';
import { ThemedText } from '@/components/ThemedText';
import { db, auth } from '@/app/config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function CreateIssueScreen() {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const getCurrentLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
  };

  const createIssue = async () => {
    if (!description || !location) {
      alert('Please provide both description and location');
      return;
    }

    setIsSubmitting(true);
    try {
      const issueData = {
        description,
        location: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        imageUrl: image, // You'll need to implement image upload to storage
        createdBy: auth.currentUser.uid,
        createdAt: serverTimestamp(),
        status: 'active',
        participantsCount: 0,
        participants: [],
      };

      await addDoc(collection(db, 'issues'), issueData);
      router.back();
    } catch (error) {
      console.error('Error creating issue:', error);
      alert('Failed to create issue. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Report an Issue</ThemedText>
      
      <TextInput
        style={styles.input}
        placeholder="Describe the situation..."
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity 
        style={styles.locationButton} 
        onPress={getCurrentLocation}
      >
        <ThemedText>
          {location ? '📍 Location captured' : '📍 Get current location'}
        </ThemedText>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.imageButton} 
        onPress={pickImage}
      >
        <ThemedText>
          {image ? '🖼️ Image selected' : '🖼️ Add an image'}
        </ThemedText>
      </TouchableOpacity>

      {image && (
        <Image source={{ uri: image }} style={styles.previewImage} />
      )}

      <TouchableOpacity 
        style={[
          styles.submitButton,
          isSubmitting && styles.submitButtonDisabled
        ]}
        onPress={createIssue}
        disabled={isSubmitting}
      >
        <ThemedText style={styles.submitButtonText}>
          {isSubmitting ? 'Creating...' : 'Create Issue'}
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 20,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    ...SHADOWS.light,
  },
  locationButton: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    ...SHADOWS.light,
  },
  imageButton: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    ...SHADOWS.light,
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    ...SHADOWS.medium,
  },
  submitButtonDisabled: {
    opacity: 0.7,
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 
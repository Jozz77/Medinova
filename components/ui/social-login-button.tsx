import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';

interface SocialLoginButtonProps {
  type: 'facebook' | 'google';
  onPress: () => void;
}

export function SocialLoginButton({ type, onPress }: SocialLoginButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'facebook' ? styles.facebookButton : styles.googleButton,
      ]}
      onPress={onPress}>
      {type === 'facebook' ? (
        <Text style={styles.facebookText}>f</Text>
      ) : (
        <Ionicons name="logo-google" size={24} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: Colors.light.lightGray,
  },
  facebookText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
});


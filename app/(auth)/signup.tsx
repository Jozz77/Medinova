import { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/theme';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SocialLoginButton } from '@/components/ui/social-login-button';

export default function SignUpScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSignUp = () => {
    console.log('Sign Up:', { fullName, password, email, mobileNumber });
  };

  const handleSocialLogin = (type: 'facebook' | 'google') => {
    console.log(`${type} login`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Create New Account</Text>

          <View style={styles.form}>
            <Input
              label="Full Name"
              placeholder="Enter Your Full Name"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="words"
            />

            <Input
              label="Password"
              placeholder="Enter Your Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <Input
              label="Email"
              placeholder="Enter Your Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Input
              label="Mobile Number"
              placeholder="Enter Your Phone Number"
              value={mobileNumber}
              onChangeText={setMobileNumber}
              keyboardType="phone-pad"
            />

            <Button title="Sign Up" onPress={handleSignUp} />

            <View style={styles.separator}>
              <Text style={styles.separatorText}>OR</Text>
            </View>

            <View style={styles.socialContainer}>
              <SocialLoginButton type="facebook" onPress={() => handleSocialLogin('facebook')} />
              <SocialLoginButton type="google" onPress={() => handleSocialLogin('google')} />
            </View>

            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
                <Text style={styles.signInLink}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.light.teal,
    textAlign: 'center',
    marginBottom: 32,
  },
  form: {
    flex: 1,
  },
  separator: {
    alignItems: 'center',
    marginVertical: 24,
  },
  separatorText: {
    fontSize: 14,
    color: Colors.light.gray,
    fontWeight: '500',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    fontSize: 14,
    color: Colors.light.darkGray,
  },
  signInLink: {
    fontSize: 14,
    color: Colors.light.teal,
    fontWeight: '600',
  },
});


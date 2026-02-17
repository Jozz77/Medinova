import { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/theme';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SocialLoginButton } from '@/components/ui/social-login-button';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Sign In:', { email, password });
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
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.description}>
            Korem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>

          <View style={styles.form}>
            <Input
              label="Email"
              placeholder="Enter Your Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Input
              label="Password"
              placeholder="Enter Your Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forget Password</Text>
            </TouchableOpacity>

            <Button title="Sign In" onPress={handleSignIn} />

            <View style={styles.separator}>
              <Text style={styles.separatorText}>OR</Text>
            </View>

            <View style={styles.socialContainer}>
              <SocialLoginButton type="facebook" onPress={() => handleSocialLogin('facebook')} />
              <SocialLoginButton type="google" onPress={() => handleSocialLogin('google')} />
            </View>

            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
                <Text style={styles.signUpLink}>Sign Up</Text>
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
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.light.teal,
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.light.darkGray,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: Colors.light.gray,
    marginBottom: 32,
    lineHeight: 20,
  },
  form: {
    flex: 1,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: Colors.light.darkGray,
  },
  separator: {
    alignItems: 'center',
    marginVertical: 24,
  },
  separatorText: {
    fontSize: 14,
    color: Colors.light.darkGray,
    fontWeight: '500',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14,
    color: Colors.light.darkGray,
  },
  signUpLink: {
    fontSize: 14,
    color: Colors.light.teal,
    fontWeight: '600',
  },
});


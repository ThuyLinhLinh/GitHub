import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Điều hướng đến màn hình Success khi nhấn nút Đăng nhập
    navigation.navigate('Success');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/hinh3.jpg')} style={styles.logo} />
      <TextInput
        style={styles.input}                                
        placeholder="Email hoặc số điện thoại"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        placeholderTextColor="gray"
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
      <View style={styles.divider} />
      <TouchableOpacity style={styles.createAccount}>
        <Text style={styles.createAccountText}>Tạo tài khoản mới</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#1877f2',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 10,
    color: '#1877f2',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    marginVertical: 20,
  },
  createAccount: {
    marginBottom: 20,
  },
  createAccountText: {
    color: '#1877f2',
    fontWeight: 'bold',
  },
});

export default LoginScreen;

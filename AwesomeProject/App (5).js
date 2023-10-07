import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // Sử dụng các thành phần React Native

import OverlayScreen from './screem/PayMain';
import PaymentScreen from './screem/PaymentScreen'; // Import màn hình thanh toán

function App() {
  const [overlayVisible, setOverlayVisible] = useState(true); // Ban đầu đặt overlayVisible thành true để hiển thị overlay
  const [paymentVisible, setPaymentVisible] = useState(false); // Ban đầu đặt paymentVisible thành false

  const handleApplePayClick = () => {
    // Hiển thị màn hình thanh toán khi nhấp vào nút "Apple Pay"
    setPaymentVisible(true);
  };

  return (
    <View style={styles.container}>
      {overlayVisible && <OverlayScreen onClose={() => setOverlayVisible(false)} />}
      {/* Đóng overlay khi onClose được gọi */}
      
      {paymentVisible && <PaymentScreen />} {/* Hiển thị PaymentScreen nếu paymentVisible là true */}

      {/* Nút "Apple Pay" */}
      <TouchableOpacity style={styles.applePayButton} onPress={handleApplePayClick}>
        <Text style={styles.applePayButtonText}>Apple Pay</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  applePayButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  applePayButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;

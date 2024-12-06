import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

const ResetButton = ({ onReset }) => (
  <TouchableOpacity style={globalStyles.resetButton} onPress={onReset}>
    <Text style={globalStyles.resetButtonText}>Reset Pertandingan</Text>
  </TouchableOpacity>
);

export default ResetButton;
import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Header = ({ title }) => (
  <View style={globalStyles.header}>
    <Text style={globalStyles.headerText}>{title}</Text>
  </View>
);

export default Header;
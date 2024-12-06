import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/globalStyles';

const TeamScore = ({ teamName, score, onIncrement, onDecrement }) => (
  <View style={globalStyles.teamContainer}>
    <Text style={globalStyles.teamName}>{teamName}</Text>
    <Text style={globalStyles.score}>{score}</Text>
    <View style={globalStyles.buttonRow}>
      <TouchableOpacity style={globalStyles.button} onPress={onIncrement}>
        <Text style={globalStyles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={onDecrement}>
        <Text style={globalStyles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default TeamScore;
import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import Header from '../components/Header';
import TeamScore from '../components/TeamScore';
import ResetButton from '../components/ResetButton';
import globalStyles from '../styles/globalStyles';
import { TEAM_A, TEAM_B } from '../utils/constants';

export default function ScoreManagerScreen() {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);
  const MAX_SCORE = 10;

  // Lifecycle: Check if any team wins
  useEffect(() => {
    if (scoreTeamA === MAX_SCORE) {
      Alert.alert("Pemenang", `${TEAM_A} menang!`);
    }
    if (scoreTeamB === MAX_SCORE) {
      Alert.alert("Pemenang", `${TEAM_B} menang!`);
    }
  }, [scoreTeamA, scoreTeamB]);

  const incrementScore = (team) => {
    if (team === 'A' && scoreTeamA < MAX_SCORE) {
      setScoreTeamA(scoreTeamA + 1);
    }
    if (team === 'B' && scoreTeamB < MAX_SCORE) {
      setScoreTeamB(scoreTeamB + 1);
    }
  };

  const decrementScore = (team) => {
    if (team === 'A' && scoreTeamA > 0) {
      setScoreTeamA(scoreTeamA - 1);
    }
    if (team === 'B' && scoreTeamB > 0) {
      setScoreTeamB(scoreTeamB - 1);
    }
  };

  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
  };

  return (
    <View style={globalStyles.container}>
      <Header title="Pengaturan Skor Futsal" />
      <TeamScore
        teamName={TEAM_A}
        score={scoreTeamA}
        onIncrement={() => incrementScore('A')}
        onDecrement={() => decrementScore('A')}
      />
      <TeamScore
        teamName={TEAM_B}
        score={scoreTeamB}
        onIncrement={() => incrementScore('B')}
        onDecrement={() => decrementScore('B')}
      />
      <ResetButton onReset={resetScores} />
    </View>
  );
}

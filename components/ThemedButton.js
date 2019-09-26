import React from 'react';
import { useStateValue } from '../AppState';
import { Button } from 'react-native';

export const ThemedButton = () => {
  const [{ theme }, dispatch] = useStateValue();
  return (
    <Button
      title="Make me blue!"
      color={theme.primary}
      onPress={() => dispatch({
        type: 'changeTheme',
        newTheme: { primary: 'blue'}
      })}
    />
  );
}

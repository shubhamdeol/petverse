import React from 'react';
import {StyleSheet, TextInput, TextInputProps, TextStyle} from 'react-native';

interface IInput extends TextInputProps {
  padding?: TextStyle['padding'];
  paddingTop?: TextStyle['paddingTop'];
  paddingVertical?: TextStyle['paddingVertical'];
  paddingBottom?: TextStyle['paddingBottom'];
  paddingHorizontal?: TextStyle['paddingHorizontal'];
  margin?: TextStyle['margin'];
  marginTop?: TextStyle['marginTop'];
  marginVertical?: TextStyle['marginVertical'];
  marginBottom?: TextStyle['marginBottom'];
  marginHorizontal?: TextStyle['marginHorizontal'];
}

const Input = ({
  children,
  padding,
  paddingTop,
  paddingVertical,
  paddingBottom,
  paddingHorizontal,
  margin,
  marginTop,
  marginVertical,
  marginBottom,
  marginHorizontal,
  style,
  ...props
}: IInput) => {
  const blockStyle = StyleSheet.flatten([
    padding !== undefined && {padding},
    paddingHorizontal !== undefined && {paddingHorizontal},
    paddingBottom !== undefined && {paddingBottom},
    paddingTop !== undefined && {paddingTop},
    paddingVertical !== undefined && {paddingVertical},
    margin !== undefined && {margin},
    marginHorizontal !== undefined && {marginHorizontal},
    marginBottom !== undefined && {marginBottom},
    marginTop !== undefined && {marginTop},
    marginVertical !== undefined && {marginVertical},
    style,
  ]);
  return (
    <TextInput style={blockStyle} {...props}>
      {children}
    </TextInput>
  );
};

export default Input;

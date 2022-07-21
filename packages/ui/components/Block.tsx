import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';

export interface IBlock extends ViewProps {
  children?: ReactNode;
  flex?: ViewStyle['flex'];
  color?: ViewStyle['backgroundColor'];
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  row?: boolean;
  style?: StyleProp<ViewStyle>;
  margin?: ViewStyle['margin'];
  marginTop?: ViewStyle['marginTop'];
  marginBottom?: ViewStyle['marginBottom'];
  marginVertical?: ViewStyle['marginVertical'];
  marginHorizontal?: ViewStyle['marginHorizontal'];
  padding?: ViewStyle['padding'];
  paddingTop?: ViewStyle['paddingTop'];
  paddingBottom?: ViewStyle['paddingBottom'];
  paddingVertical?: ViewStyle['paddingVertical'];
  paddingHorizontal?: ViewStyle['paddingHorizontal'];
}

const Block = ({
  children,
  flex,
  color,
  align,
  justify,
  row,
  style,
  margin,
  marginTop,
  marginBottom,
  marginVertical,
  marginHorizontal,
  padding,
  paddingTop,
  paddingBottom,
  paddingVertical,
  paddingHorizontal,
  ...props
}: IBlock) => {
  const blockStyle = StyleSheet.flatten([
    flex !== undefined && {flex},
    color !== undefined && {backgroundColor: color},
    align !== undefined && {alignItems: align},
    justify !== undefined && {justifyContent: justify},
    row !== undefined && {flexDirection: 'row'},
    margin !== undefined && {margin},
    marginTop !== undefined && {marginTop},
    marginBottom !== undefined && {marginBottom},
    marginVertical !== undefined && {marginVertical},
    marginHorizontal !== undefined && {marginHorizontal},
    padding !== undefined && {padding},
    paddingTop !== undefined && {paddingTop},
    paddingBottom !== undefined && {paddingBottom},
    paddingVertical !== undefined && {paddingVertical},
    paddingHorizontal !== undefined && {paddingHorizontal},
    style,
  ]);
  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>
  );
};

export default Block;

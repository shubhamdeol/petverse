import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import {MarginPaddingProps} from './types';
import {createMarginPaddingObj} from './utils';

export interface IBlock extends ViewProps, MarginPaddingProps {
  children?: ReactNode;
  flex?: ViewStyle['flex'];
  color?: ViewStyle['backgroundColor'];
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  row?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Block = ({
  children,
  flex,
  color,
  align,
  justify,
  row,
  style,
  ...props
}: IBlock) => {
  const blockStyle = StyleSheet.flatten([
    flex !== undefined && {flex},
    color !== undefined && {backgroundColor: color},
    align !== undefined && {alignItems: align},
    justify !== undefined && {justifyContent: justify},
    row !== undefined && {flexDirection: 'row'},
    createMarginPaddingObj(props),
    style,
  ]) as ViewStyle;
  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>
  );
};

export default Block;

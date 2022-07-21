import React, {ReactNode} from 'react';
import {StyleSheet, Text as RNText, TextProps, TextStyle} from 'react-native';
import {useTheme} from '..';

interface IText extends TextStyle, TextProps {
  children?: ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  p?: boolean;
  s1?: boolean;
  s2?: boolean;
  s3?: boolean;
  s4?: boolean;
  c1?: boolean;
  c2?: boolean;
  bt1?: boolean;
  size?: TextStyle['fontSize'];
  color?: TextStyle['color'];
  align?: TextStyle['textAlign'];
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

const Text = ({
  children,
  flex,
  color,
  size,
  h1,
  h2,
  h3,
  h4,
  s1,
  s2,
  s3,
  s4,
  c1,
  c2,
  bt1,
  align,
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
  textTransform,
  ...props
}: IText) => {
  const {fonts, colors} = useTheme();
  const textStyle = StyleSheet.flatten([
    {fontSize: 16},
    bt1 !== undefined && {fontSize: 16, ...fonts.medium},
    h1 !== undefined && {fontSize: 32, ...fonts.medium},
    h2 !== undefined && {fontSize: 24, ...fonts.medium},
    h3 !== undefined && {fontSize: 22, ...fonts.medium},
    h4 !== undefined && {fontSize: 18, ...fonts.medium},
    s1 !== undefined && {fontSize: 16, ...fonts.medium},
    s2 !== undefined && {fontSize: 16, ...fonts.regular},
    s3 !== undefined && {fontSize: 14, ...fonts.medium},
    s4 !== undefined && {fontSize: 14, ...fonts.regular},
    c1 !== undefined && {fontSize: 12, ...fonts.medium},
    c2 !== undefined && {fontSize: 12, ...fonts.regular},
    flex !== undefined && {flex},
    align !== undefined && {textAlign: align},
    color !== undefined && {color: color || colors.textHigh},
    size !== undefined && {fontSize: size},
    padding !== undefined && {padding},
    textTransform !== undefined && {textTransform},
    paddingHorizontal !== undefined && {paddingHorizontal},
    paddingBottom !== undefined && {paddingBottom},
    paddingTop !== undefined && {paddingTop},
    paddingVertical !== undefined && {paddingVertical},
    margin !== undefined && {margin},
    marginHorizontal !== undefined && {marginHorizontal},
    marginBottom !== undefined && {marginBottom},
    marginTop !== undefined && {marginTop},
    marginVertical !== undefined && {marginVertical},
  ]) as TextStyle;
  return (
    <RNText style={textStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;

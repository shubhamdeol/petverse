import React, {ReactNode} from 'react';
import {
  StyleSheet,
  Pressable,
  PressableProps,
  ViewStyle,
  StyleProp,
} from 'react-native';
import Text from './Text';
import {useTheme} from '..';

interface IButton extends PressableProps {
  mode?: 'text' | 'outlined' | 'contained';
  uppercase?: boolean;
  children?: ReactNode;
  color?: ViewStyle['backgroundColor'];
  radius?: ViewStyle['borderRadius'];
  padding?: ViewStyle['padding'];
  paddingTop?: ViewStyle['paddingTop'];
  paddingVertical?: ViewStyle['paddingVertical'];
  paddingBottom?: ViewStyle['paddingBottom'];
  paddingHorizontal?: ViewStyle['paddingHorizontal'];
  margin?: ViewStyle['margin'];
  marginTop?: ViewStyle['marginTop'];
  marginVertical?: ViewStyle['marginVertical'];
  marginBottom?: ViewStyle['marginBottom'];
  marginHorizontal?: ViewStyle['marginHorizontal'];
  style?: StyleProp<ViewStyle>;
}

const Button = ({
  children,
  color,
  radius,
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
  uppercase,
  mode,
  style,
  ...props
}: IButton) => {
  const {colors} = useTheme();
  const buttonStyle = StyleSheet.flatten([
    color !== undefined && {backgroundColor: color},
    radius !== undefined && {borderRadius: radius},
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

  const stylesBasedOnMode = React.useMemo(() => {
    switch (mode) {
      case 'contained':
        return {
          backgroundColor: colors.surfacePrimary,
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 4,
        };
      case 'outlined':
        return {
          borderWidth: 1,
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 4,
          borderColor: colors.borderOutline,
        };
      case 'text':
        return {
          paddingVertical: 12,
          paddingHorizontal: 16,
        };

      default:
        break;
    }
  }, [colors, mode]);

  const textStylesBasedOnMode = React.useMemo(() => {
    switch (mode) {
      case 'contained':
        return {
          color: colors.textOnSurface,
        };
      case 'outlined':
      case 'text':
        return {
          color: colors.textPrimary,
        };

      default:
        break;
    }
  }, [colors, mode]);

  return (
    <Pressable style={[stylesBasedOnMode, buttonStyle]} {...props}>
      <Text
        bt1
        color={textStylesBasedOnMode?.color || color}
        textTransform={uppercase ? 'uppercase' : 'none'}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;

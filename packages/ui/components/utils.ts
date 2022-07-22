import {StyleSheet} from 'react-native';
import {MarginPaddingProps} from './types';

export const createMarginPaddingObj = ({
  p,
  ph,
  pb,
  pt,
  pv,
  m,
  mh,
  mb,
  mt,
  mv,
}: MarginPaddingProps) => {
  return StyleSheet.flatten([
    p !== undefined && {padding: p},
    ph !== undefined && {paddingHorizontal: ph},
    pb !== undefined && {paddingBottom: pb},
    pt !== undefined && {paddingTop: pt},
    pv !== undefined && {paddingVertical: pv},
    m !== undefined && {margin: m},
    mh !== undefined && {marginHorizontal: mh},
    mb !== undefined && {marginBottom: mb},
    mt !== undefined && {marginTop: mt},
    mv !== undefined && {marginVertical: mv},
  ]);
};

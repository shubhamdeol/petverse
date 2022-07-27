import {StyleSheet} from 'react-native';
import {MarginPaddingProps, Spacing} from './types';

export const createMarginPaddingObj = (
  {p, ph, pb, pt, pv, m, mh, mb, mt, mv}: MarginPaddingProps,
  spacing: Spacing,
) => {
  return StyleSheet.flatten([
    p !== undefined && {padding: spacing[p]},
    ph !== undefined && {paddingHorizontal: spacing[ph]},
    pb !== undefined && {paddingBottom: spacing[pb]},
    pt !== undefined && {paddingTop: spacing[pt]},
    pv !== undefined && {paddingVertical: spacing[pv]},
    m !== undefined && {margin: spacing[m]},
    mh !== undefined && {marginHorizontal: spacing[mh]},
    mb !== undefined && {marginBottom: spacing[mb]},
    mt !== undefined && {marginTop: spacing[mt]},
    mv !== undefined && {marginVertical: spacing[mv]},
  ]);
};

export const COLORS = {
  primary: '#E63946',     // Red shade
  secondary: '#457B9D',   // Blue shade
  background: '#F1FAEE',  // Light background
  white: '#FFFFFF',
  black: '#1D3557',       // Dark blue, almost black
  grey: '#8D99AE',
  success: '#2EC4B6',
  error: '#FF1654',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: 'Roboto-Bold',
  semiBold: 'Roboto-SemiBold',
  medium: 'Roboto-Medium',
  regular: 'Roboto-Regular',
  light: 'Roboto-Light',
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
}; 
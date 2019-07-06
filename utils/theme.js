const rotateStyle = numDegrees => {
  return {
    transform: `rotate(${numDegrees}deg)`
  };
};

const theme = {
  // Colors
  offBlack: '#282828',
  sage: '#63796D',
  lightSage: '#8BA4A1',
  copper: '#C08162',
  offWhite: '#F8F6F4',
  white: '#FFFFFF',
  // Fonts
  titleFont: 'Dancing Script',
  bodyFont: 'Lato',
  // Font sizes
  titleFontSize: '4rem',
  subheadFontSize: '2.8rem',
  h3FontSize: '2rem',
  bodyFontSize: '1.3rem',
  // Page Dimensions
  maxContentWidth: '800px',
  // Effects
  boxShadow: '3px 18px 11px 0 rgba(0, 0, 0, 0.2)',
  rotateStyle
};

export default theme;

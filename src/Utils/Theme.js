export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',

    accent: '#40de10',
    primaryBackground: '',
    secondaryBackground: '',

    text: {
      sectionTitle: '#FFAC1C',
      primaryText: '#202c2d;',
      secondaryText: '',
      accent: '#2ee59d',
    },

    button: {
      primaryBtnBackground: '#ffffff',
      secondaryBtnBackground: '#de7676',
      accentBtnBackground: '#2ee59d',
      inputBorder: '#2ee59d66',
      btnShadow: '#2ee59d66',
      text: '#40de10',

      primaryBtn: '',
    },

    form: {
      formBorder: ' teal',
      formTitle: '#212121',
      formText: '#414141',
      formPlaceholder: '',
    },

    searchInput: '',
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],

  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },

  textTransform: {
    cap: 'capitalize',
    lowCase: 'lowercase',
    upCase: 'uppercase',
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '20px',
    xl: '24px',
    xxl: '32px',
  },

  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },

  letterSpacing: {
    s: '0.01rem',
    m: '0.03rem',
    l: '0.05rem',
  },

  lineHeights: {
    body: 1.5,
    form: 1.75,
    sectionTitle: 1.75,
    text: 1.25,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },

  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '30px',
    round: '50%',
  },
};

export default theme;

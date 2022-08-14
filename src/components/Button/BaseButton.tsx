import { Button as MuiButton, ButtonProps, createTheme, ThemeProvider } from '@mui/material';

interface IButtonProps extends ButtonProps {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'special' | 'info' | 'warning';
  className?: any;
  disabled?: boolean;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    special?: PaletteColorOptions;
  }

  interface Palette {
    special: PaletteColor;
  }
}

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    special?: any;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#A760FF',
    },
    secondary: {
      main: '#2e16e5',
    },
    success: {
      main: '#7DCE13',
    },
    error: {
      main: '#ff0000',
    },
    special: {
      main: '#A97155',
    },
    info: {
      main: '#2e16e5',
    },
    warning: {
      main: '#f6ff00',
    },
  },
});

function Button({ children, ...rest }: IButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton {...rest}>{children}</MuiButton>
    </ThemeProvider>
  );
}

export default Button;

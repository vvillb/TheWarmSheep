import {ThemeProvider} from '@emotion/react';
import {CssBaseline} from '@mui/material';
import { NeutralTheme } from './NeutralTheme';
import { MarineTheme } from './MarineTheme';

const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={MarineTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}

export default AppTheme

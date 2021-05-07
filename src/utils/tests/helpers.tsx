import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import theme from 'styles/theme'
import React from 'react'

export const renderWithTheme = (childre: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{childre}</ThemeProvider>)
}

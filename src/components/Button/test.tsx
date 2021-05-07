import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from 'styled-icons/material-outlined'

import Button from '.'

describe('<Button />', () => {
  it('should a buttom in medium size', () => {
    const { container } = renderWithTheme(<Button>BUY NOW</Button>)
    expect(screen.getByRole('button', { name: /BUY NOW/i })).toHaveStyle({
      padding: '0.8rem 3.2rem',
      height: '4rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot
  })

  it('should a buttom in small size', () => {
    renderWithTheme(<Button size="small">BUY NOW</Button>)
    expect(screen.getByRole('button', { name: /BUY NOW/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should a buttom in large size', () => {
    renderWithTheme(<Button size="large">BUY NOW</Button>)
    expect(screen.getByRole('button', { name: /BUY NOW/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should a render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>BUY NOW</Button>)
    expect(screen.getByRole('button', { name: /BUY NOW/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should a render a icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>BUY NOW</Button>
    )
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should a render a button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        BUY NOW
      </Button>
    )
    expect(screen.getByRole('link', { name: /BUY NOW/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})

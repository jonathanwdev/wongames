import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const args = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img:
    'https://steamcdn-a.akamaihd.net/steam/apps/1239430/capsule_616x353.jpg?t=1587824441',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the  GameCard correctly', () => {
    renderWithTheme(<GameCard {...args} />)

    expect(
      screen.getByRole('heading', { name: /Population Zero/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Rockstar Games/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Population Zero/i })
    ).toHaveAttribute('src', args.img)

    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument()
  })

  it('should render the price in label', () => {
    renderWithTheme(<GameCard {...args} />)
    const price = screen.getByText('R$ 235,00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ background: theme.colors.secondary })
  })

  it('should render the price in label', () => {
    renderWithTheme(<GameCard {...args} promotionalPrice="R$ 15,00" />)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled favorite icon when faborite is true', () => {
    renderWithTheme(<GameCard {...args} favorite />)

    expect(screen.getByLabelText(/remove from Wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...args} favorite onFav={onFav} />)
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toBeCalled()
  })

  it('should render with ribbon', () => {
    renderWithTheme(
      <GameCard
        {...args}
        ribbon="My Rebbon"
        ribbonSize="small"
        ribbonColor="primary"
      />
    )
    expect(screen.getByText(/My Rebbon/i)).toBeInTheDocument()
  })
})

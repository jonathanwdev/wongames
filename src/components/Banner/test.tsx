import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'
import Ribbon from 'components/Ribbon'

const props = {
  img:
    'https://s.aficionados.com.br/imagens/hunter-x-hunter-conheca-os-personagens-do-iconico-anime_f.jpg',
  title: 'Hunter x Hunter',
  subtitle:
    '<p>Watch the new <strong>Game</strong> of the perfect anime hunter x hunter</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/hunter-x-hunter'
}

describe('<Banner />', () => {
  it('should render correctely', () => {
    const { container } = renderWithTheme(<Banner {...props} />)
    const heading = screen.getAllByRole('heading')

    expect(heading[0]).toBeInTheDocument()
    expect(heading[1]).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Hunter x Hunter/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbobColor="secondary"
      />
    )
    const ribbon = screen.getByText(/My Ribbon/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      background: '#3CD3C1'
    })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})

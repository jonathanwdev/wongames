import 'match-media-mock'
import { screen } from '@testing-library/react'

import BannerSlider from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const items = [
  {
    img:
      'https://s.aficionados.com.br/imagens/guia-hunter-x-hunter-entenda-as-2-ordens-em-que-o-anime-pode-ser-visto_f.jpg',
    title: 'Hunter x Hunter',
    subtitle: '<p>Play the new game <strong>Hunter x Hunter</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/hunter-x-hunter',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://s.aficionados.com.br/imagens/conheca-naruto-uzumaki_f.jpg',
    title: 'Naruto',
    subtitle: '<p>Play the new game <strong>Naruto</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/naruto'
  }
]

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render only one active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
    expect(
      screen.getAllByRole('heading', {
        name: /Hunter x Hunter/i,
        hidden: false
      })[0]
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', {
        name: /Hunter x Hunter/i,
        hidden: true
      })[0]
    ).toBeInTheDocument()
  })
  it('should render vertical slider dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})

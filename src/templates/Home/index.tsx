import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlighProps } from 'components/Highlight'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'

import * as S from './styles'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlighProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlighProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHightlight: HighlighProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  upcommingMoreGames,
  freeGames,
  freeHightlight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading color="black" lineLeft lineColor="secondary">
        News
      </Heading>
      <GameCardSlider items={newGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>
      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames} color="white" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>
      <GameCardSlider items={upcommingGames} color="white" />
      <Highlight {...upcommingHighlight} />
      <GameCardSlider items={upcommingMoreGames} color="white" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>
      <Highlight {...freeHightlight} />
      <GameCardSlider items={freeGames} />
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home

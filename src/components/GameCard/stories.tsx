import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img:
      'https://steamcdn-a.akamaihd.net/steam/apps/1239430/capsule_616x353.jpg?t=1587824441',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200'
  },
  argTypes: {
    ribbon: { type: 'string' }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

import { render, screen } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

describe('Home', () => {
  it('Should render the user profile', async () => {
    render(<Home user={user} />)

    screen.getByText('Vonta')
    screen.getByText('Res Non Verba')
    screen.getByText('Interests')

    const header = screen.getByAltText('header')
    expect(header).toBeInTheDocument()

    const avatar = screen.getByAltText('avatar')
    expect(avatar).toBeInTheDocument()

    user.likes.forEach((item) => screen.getByText(`${item}`))
  })
})

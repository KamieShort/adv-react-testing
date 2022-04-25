import { render, screen } from '@testing-library/react'
// import Header from './components/layout/Header'
import Layout from './views/Layout/Layout'

describe('Layout', () => {
  it('Should render the header', () => {
    render(<Layout />)

    screen.debug()

    const img = screen.getByAltText('header')
  })
})

import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('Should render the header', async () => {
    render(<App />)

    const img = screen.getByAltText('Alchemy Logo')
    const name = await screen.findByText('Vonta')
    expect(name).toBeInTheDocument()
    expect(img).toBeInTheDocument()
  })
})

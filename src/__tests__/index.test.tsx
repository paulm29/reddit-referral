// @vitest-environment jsdom

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { App } from '../routes/index'

describe('Home route', () => {
  it('renders the TanStack Start landing page', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /tanstack start/i,
      }),
    ).toBeTruthy()
  })
})

import { render } from "@testing-library/react"

import Button from "./Button"

describe('<Button>', () => {
    it('deve renderizar o button', () => {
        const { getByText, getByRole} = render(<Button>button</Button>)
        const buttonElement = expect(getByRole('button')).toBeInTheDocument()
        const buttonTextElemenet = expect(getByText('button')).toBeInTheDocument()
  
    })
})
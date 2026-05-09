import { render } from "@testing-library/react"

import Button from "./Button"

describe('<Button>', () => {
    it('deve renderizar o button', () => {
        const { getByText} = render(<Button>button</Button>)
        expect(getByText('button'))
  
    })
})
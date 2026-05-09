import { render } from "@testing-library/react"

import Button from "./Button"

describe('<Button>', () => {
    it('should render button', () => {
        render(<Button>button</Button>)
    })
})
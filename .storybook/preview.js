/** @type { import('@storybook/react').Preview } */
import theme from "../src/theme"
import "./story.css"
import { ThemeProvider } from 'styled-components'
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export default preview;

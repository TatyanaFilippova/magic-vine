import type { Preview } from "@storybook/react";
import localFont from "next/font/local";

const inter = localFont({ src: [
        {
            path: '../fonts/SegoePrintRegular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/SegoePrintBold.ttf',
            weight: 'bold',
            style: 'normal',
        },
    ] });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
      Story => (
          <main className={inter.className}>
              <Story />
          </main>
      )
  ]
};

export default preview;

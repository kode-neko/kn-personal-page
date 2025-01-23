import type { Meta, StoryObj } from '@storybook/react';
import { MainMenu } from '../../../components/organisms/main-bar';

const meta = {
  title: 'Personal Page/MainMenu',
  component: MainMenu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#333' },
      ],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSelected: () => {},
  },
};

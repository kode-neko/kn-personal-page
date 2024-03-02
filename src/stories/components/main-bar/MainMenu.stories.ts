import { MainMenu } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/globals.css'

const meta = {
  title: 'MainMenu',
  component: MainMenu,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

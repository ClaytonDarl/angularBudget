import type { Meta, StoryObj } from '@storybook/angular';
import { MyButtonComponent } from './baseButton.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MyButtonComponent> = {
  component: MyButtonComponent,
  title: 'MyButtonComponent',
};
export default meta;
type Story = StoryObj<MyButtonComponent>;

export const Primary: Story = {
  args: {
    text: 'baseButton works!',
    padding: 10,
    disabled: true,
  },
};

export const Heading: Story = {
  args: {
    text: 'baseButton works!',
    padding: 10,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/baseButton works!/gi)).toBeTruthy();
  },
};

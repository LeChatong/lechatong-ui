import type { Meta, StoryObj } from '@storybook/angular';
import Button from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  render: (args: Button) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<Button>;

export const ButtonType: Story = {
  args: {
    buttonType: 'default'
  }
}


export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

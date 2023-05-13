import { Meta, StoryObj } from "@storybook/angular";
import InputNumber from "./input-number.component";

const meta: Meta<InputNumber> = {
    title: 'Example/NumberInput',
    component: InputNumber,
    tags: ['autodocs'],
    render: (args: InputNumber) => ({
        props: {
            ...args,
        },
    }),
    argTypes:{},
};

export default meta;
type Story = StoryObj<InputNumber>;

export const Label: Story = {
    args: {
      label: 'Label'
    }
  }
import { Meta, StoryObj } from "@storybook/angular";
import InputPrice from "./input-price.component";

const meta: Meta<InputPrice> = {
    title: 'Example/PriceInput',
    component: InputPrice,
    tags: ['autodocs'],
    render: (args: InputPrice) => ({
        props: {
            ...args,
        },
    }),
    argTypes:{},
};

export default meta;
type Story = StoryObj<InputPrice>;

export const Label: Story = {
    args: {
      label: 'Label'
    }
  }

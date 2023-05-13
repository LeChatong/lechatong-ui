import { Meta, StoryObj } from "@storybook/angular";
import CountryInput from "./input-country.component";

const meta: Meta<CountryInput> = {
    title: 'Example/CountryInput',
    component: CountryInput,
    tags: ['autodocs'],
    render: (args: CountryInput) => ({
        props: {
            ...args,
        },
    }),
    argTypes:{},
};

export default meta;
type Story = StoryObj<CountryInput>;

export const Label: Story = {
    args: {
      label: 'Label'
    }
  }
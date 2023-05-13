import { Meta, StoryObj } from "@storybook/angular";
import InputPhoneNumber from "./input-phone-number.component";

const meta: Meta<InputPhoneNumber> = {
    title: 'Example/PhoneNumberInput',
    component: InputPhoneNumber,
    tags: ['autodocs'],
    render: (args: InputPhoneNumber) => ({
        props: {
            ...args,
        },
    }),
    argTypes:{},
};

export default meta;
type Story = StoryObj<InputPhoneNumber>;

export const Label: Story = {
    args: {
      label: 'Label'
    }
  }
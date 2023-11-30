import { TextInput, TextInputProps } from 'react-native';

import { colors } from '@utils/theme';

type InputProps = TextInputProps & {
	inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: InputProps) {
	return (
		<TextInput
			{...rest}
			ref={inputRef}
			className="flex-1 min-h-[56px] max-h-[56px] bg-gray-700 rounded-md p-4 text-white font-regular text-base"
			placeholderTextColor={colors.gray[300]}
		/>
	);
}

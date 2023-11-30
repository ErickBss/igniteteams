import { tv } from 'tailwind-variants';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
	type: 'primary' | 'secondary';
	text: string;
};

const button = tv({
	base: 'flex-1 min-h-[56px] max-h-[56px] rounded-md justify-center items-center',
	variants: {
		type: {
			primary: 'bg-green-700',
			secondary: 'bg-red-dark',
		},
	},
});

export function Button({ type, text, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity {...rest} className={button({ type })}>
			<Text className="text-base text-white font-bold">{text}</Text>
		</TouchableOpacity>
	);
}

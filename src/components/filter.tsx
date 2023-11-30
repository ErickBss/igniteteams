import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { tv } from 'tailwind-variants';

type FilterProps = TouchableOpacityProps & {
	isActive?: boolean;
	text: string;
};

const button = tv({
	base: 'rounded-md mr-3 h-[38px] w-[70px] items-center justify-center',
	variants: {
		type: {
			active: 'border border-green-700',
			default: '',
		},
	},
});

export function Filter({ isActive = false, text, ...rest }: FilterProps) {
	return (
		<TouchableOpacity
			{...rest}
			className={button({ type: isActive ? 'active' : 'default' })}
		>
			<Text className="text-sm font-bold text-white uppercase">{text}</Text>
		</TouchableOpacity>
	);
}

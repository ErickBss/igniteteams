import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@utils/theme';

type ButtonIconProps = TouchableOpacityProps & {
	type: 'primary' | 'secondary';
	icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ type, icon, ...rest }: ButtonIconProps) {
	return (
		<TouchableOpacity
			{...rest}
			className="w-14 h-14 justify-center items-center ml-3"
		>
			<MaterialIcons
				name={icon}
				color={type === 'primary' ? colors.green[700] : colors.red}
				size={24}
			/>
		</TouchableOpacity>
	);
}

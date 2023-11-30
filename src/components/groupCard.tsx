import { colors } from '@utils/theme';
import { UsersThree } from 'phosphor-react-native';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type GroupCardProps = TouchableOpacityProps & {
	title: string;
};

export function GroupCard({ title, ...rest }: GroupCardProps) {
	return (
		<TouchableOpacity
			{...rest}
			className="w-full h-[90px] bg-gray-500 rounded-md flex-row items-center p-6 mb-3"
		>
			<UsersThree
				color={colors.green[700]}
				size={32}
				style={{ marginRight: 20 }}
				weight="fill"
			/>
			<Text className="text-base text-gray-200 font-regular ">{title}</Text>
		</TouchableOpacity>
	);
}

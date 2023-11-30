import { View, Text } from 'react-native';
import { ButtonIcon } from './buttonIcon';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@utils/theme';

type PlayerCardProps = {
	name: string;
	onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
	return (
		<View className="bg-gray-400 flex-row w-full items-center h-[56px] mb-4 rounded-md ">
			<MaterialIcons
				name="person"
				color={colors.gray[200]}
				style={{ marginLeft: 16, marginRight: 4 }}
				size={24}
			/>
			<Text className="flex-1 font-regular text-base text-gray-200">
				{name}
			</Text>

			<ButtonIcon type="secondary" icon="close" onPress={onRemove} />
		</View>
	);
}

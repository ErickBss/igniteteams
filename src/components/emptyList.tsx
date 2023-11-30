import { Text, View } from 'react-native';

type EmptyListProps = {
	message: string;
};

export function EmptyList({ message }: EmptyListProps) {
	return (
		<View className="flex-1 justify-center items-center">
			<Text className="text-center text-sm font-regular text-gray-300">
				{message}
			</Text>
		</View>
	);
}

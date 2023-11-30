import { Text, View } from 'react-native';

type HighlightProps = {
	title: string;
	subtitle: string;
};

export function Highlight({ title, subtitle }: HighlightProps) {
	return (
		<View className="w-full my-8">
			<Text className="text-center text-2xl text-white font-bold">{title}</Text>
			<Text className="text-center text-base text-gray-300 font-regular">
				{subtitle}
			</Text>
		</View>
	);
}

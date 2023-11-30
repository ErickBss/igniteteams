import { colors } from '@utils/theme';
import { ActivityIndicator, View } from 'react-native';

export function Loading() {
	return (
		<View className="flex-1 justify-center items-center bg-gray-600">
			<ActivityIndicator className="text-red" color={colors.green[700]} />
		</View>
	);
}

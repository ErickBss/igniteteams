import { StatusBar, View } from 'react-native';

import { Stack } from 'expo-router';

export default function AppLayout() {
	return (
		<>
			<StatusBar barStyle="light-content" />
			<View className="flex-1 bg-gray-600">
				<Stack
					screenOptions={{
						headerShown: false,
						animation: 'fade',
					}}
				/>
			</View>
		</>
	);
}

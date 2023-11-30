import { Image, TouchableOpacity, View } from 'react-native';
import logoImg from '@assets/logo.png';
import { CaretLeft } from 'phosphor-react-native';
import { colors } from '@utils/theme';
import { Link } from 'expo-router';

type HeaderProps = {
	showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
	return (
		<View className="w-full flex-row items-center justify-center">
			{showBackButton && (
				<Link href="/" className="flex-1">
					<CaretLeft color={colors.white} size={32} />
				</Link>
			)}
			<Image className="w-12 h-14" source={logoImg} />
		</View>
	);
}

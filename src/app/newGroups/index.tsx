import { useState } from 'react';
import { Button } from '@components/button';
import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { Input } from '@components/input';
import { colors } from '@utils/theme';
import { router } from 'expo-router';
import { UsersThree } from 'phosphor-react-native';
import { View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';

export default function NewGroup() {
	const [groupName, setGroupName] = useState('');

	async function handleNew() {
		try {
			if (!groupName?.trim()) {
				return Alert.alert('Novo Grupo', 'Informe o nome da turma.');
			}

			await groupCreate(groupName);

			router.push({
				pathname: '/players/',
				params: { group: groupName },
			});
		} catch (error) {
			if (error instanceof AppError) {
				return Alert.alert('Novo Grupo', error.message);
			}
			Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');

			console.log(error);
		}
	}

	return (
		<SafeAreaView className="flex-1  bg-gray-600 p-6">
			<Header showBackButton />
			<View className="flex-1 justify-center">
				<UsersThree
					size={56}
					color={colors.green[700]}
					style={{ alignSelf: 'center' }}
				/>
				<Highlight
					title="Nova Turma"
					subtitle="crie a turma para adicionar as pessoas"
				/>
				<Input placeholder="Nome da turma" onChangeText={setGroupName} />
				<Button
					text="Criar"
					type="primary"
					className="mt-5"
					onPress={handleNew}
				/>
			</View>
		</SafeAreaView>
	);
}

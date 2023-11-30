import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';

import { Button } from '@components/button';
import { EmptyList } from '@components/emptyList';
import { FlatList } from 'react-native';
import { GroupCard } from '@components/groupCard';
import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { Loading } from '@components/loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { groupsGetAll } from '@storage/group/groupsGetAll';

export default function Groups() {
	const [isLoading, setIsLoading] = useState(true);
	const [groups, setGroups] = useState<string[]>([]);

	async function fetchGroups() {
		try {
			setIsLoading(true);
			await groupsGetAll().then((groups) => setGroups(groups));
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	useFocusEffect(
		// evitar renderizações desnecessárias
		useCallback(() => {
			fetchGroups();
		}, []),
	);

	return (
		<SafeAreaView className="flex-1 bg-gray-600 p-6">
			<Header />
			<Highlight title="Turmas" subtitle="jogue com a sua turma" />
			{isLoading ? (
				<Loading />
			) : (
				<FlatList
					data={groups}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<GroupCard
							title={item}
							onPress={() => {
								router.push({
									pathname: '/players/',
									params: { group: item },
								});
							}}
						/>
					)}
					contentContainerStyle={!groups.length && { flex: 1 }}
					ListEmptyComponent={() => (
						<EmptyList message="Que tal cadastrar a primeira turma?" />
					)}
				/>
			)}

			<Button
				text="Criar nova turma"
				type="primary"
				onPress={() => router.push('/newGroups/')}
			/>
		</SafeAreaView>
	);
}

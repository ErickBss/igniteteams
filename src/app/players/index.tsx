import { Alert, FlatList, Text, TextInput, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';

import { AppError } from '@utils/AppError';
import { Button } from '@components/button';
import { ButtonIcon } from '@components/buttonIcon';
import { EmptyList } from '@components/emptyList';
import { Filter } from '@components/filter';
import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { Input } from '@components/input';
import { Loading } from '@components/loading';
import { PlayerCard } from '@components/playerCard';
import { PlayerDTO } from '@storage/player/dto/create';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPlayers } from '@storage/player/getPlayers';
import { playerAdd } from '@storage/player/playerAdd';
import { removeGroup } from '@storage/group/removeGroup';
import { removePlayer } from '@storage/player/removePlayer';

export default function Players() {
	const [isLoading, setIsLoading] = useState(true);
	const [team, setTeam] = useState('Time A');
	const [newPlayerName, setNewPlayerName] = useState('');
	const [players, setPlayers] = useState<PlayerDTO[]>([]);
	const newPlayerInputRef = useRef<TextInput>(null);

	const { group }: { group: string } = useLocalSearchParams();

	async function handleAddPlayer() {
		if (!newPlayerName.trim()) {
			return Alert.alert(
				'Nova Pessoa',
				'Informe o nome da pessoa para adiconar.',
			);
		}

		try {
			await playerAdd({ name: newPlayerName, team }, group);
			newPlayerInputRef.current?.blur();

			await fetchPlayers();
			setNewPlayerName('');
		} catch (error) {
			if (error instanceof AppError) {
				return Alert.alert('Nova Pessoa', error.message);
			}

			Alert.alert('Nova Pessoa', 'Não foi possível adiconar a nova pessoa.');
			console.log(error);
		}
	}

	async function handleRemovePlayer(playerName: string) {
		try {
			await removePlayer(playerName, group);
			fetchPlayers();
		} catch (error) {
			console.log(error);
			Alert.alert('Remover Pessoa', 'Não foi possível remover essa pessoa.');
		}
	}

	async function groupRemove() {
		try {
			await removeGroup(group);
			router.push('/');
		} catch (error) {
			console.log(error);
		}
	}

	async function handleRemoveGroup() {
		Alert.alert('Remover', 'Deseja remover o grupo?', [
			{ text: 'Não', style: 'cancel' },
			{ text: 'Sim', onPress: () => groupRemove() },
		]);
	}

	async function fetchPlayers() {
		try {
			setIsLoading(true);

			const players = await getPlayers(group, team);
			setPlayers(players);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchPlayers();
	}, [team]);

	return (
		<SafeAreaView className="flex-1 bg-gray-600 p-6">
			<Header showBackButton />
			<Highlight title={group} subtitle="adicione a galera e separe os times" />

			<View className="flex-row bg-gray-700 w-full justify-center rounded-md">
				<Input
					inputRef={newPlayerInputRef}
					placeholder="Nome da pessoa"
					autoCorrect={false}
					value={newPlayerName}
					onChangeText={setNewPlayerName}
					onSubmitEditing={handleAddPlayer}
					returnKeyType="done"
				/>
				<ButtonIcon type="primary" icon="add" onPress={handleAddPlayer} />
			</View>

			<View className="w-full flex-row items-center mt-8 mb-3">
				<FlatList
					data={['Time A', 'Time B']}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<Filter
							text={item}
							isActive={team === item}
							onPress={() => setTeam(item)}
						/>
					)}
					horizontal
				/>

				<Text className="text-gray-200 font-bold text-sm">
					{players.length}
				</Text>
			</View>

			{isLoading ? (
				<Loading />
			) : (
				<FlatList
					data={players}
					keyExtractor={(item) => item.name}
					renderItem={({ item }) => (
						<PlayerCard
							name={item.name}
							onRemove={() => handleRemovePlayer(item.name)}
						/>
					)}
					ListEmptyComponent={() => (
						<EmptyList message="Não há pessoas nesse time" />
					)}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={[
						{ paddingBottom: 100 },
						!players.length && { flex: 1 },
					]}
				/>
			)}

			<Button
				text="Remover Turma"
				type="secondary"
				onPress={handleRemoveGroup}
			/>
		</SafeAreaView>
	);
}

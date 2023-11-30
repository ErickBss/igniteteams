import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/config';
import { getPlayers } from './getPlayers';

export async function removePlayer(playerName: string, group: string) {
	try {
		const storage = await getPlayers(group);

		const filtered = storage.filter((player) => player.name !== playerName);
		const players = JSON.stringify(filtered);

		await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
	} catch (error) {
		throw error;
	}
}

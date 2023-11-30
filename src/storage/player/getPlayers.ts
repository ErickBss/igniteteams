import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/config';
import { PlayerDTO } from './dto/create';

export async function getPlayers(group: string, team?: string) {
	try {
		const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);
		const players: PlayerDTO[] = storage ? JSON.parse(storage) : [];

		if (team) {
			return players.filter((player) => player.team === team);
		}

		return players;
	} catch (error) {
		throw error;
	}
}

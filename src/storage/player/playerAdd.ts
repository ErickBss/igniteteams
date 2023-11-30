import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlayerDTO } from './dto/create';
import { PLAYER_COLLECTION } from '@storage/config';
import { getPlayers } from './getPlayers';
import { AppError } from '@utils/AppError';

export async function playerAdd(newPlayer: PlayerDTO, group: string) {
	try {
		const storedPlayers = await getPlayers(group);

		if (storedPlayers.find((player) => player.name === newPlayer.name)) {
			throw new AppError('Essa pessoa já esta adicionada em um time aqui.');
		}

		const storage = JSON.stringify([...storedPlayers, newPlayer]);

		await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
	} catch (error) {
		throw error;
	}
}

import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/config';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { groupsGetAll } from './groupsGetAll';

export async function removeGroup(groupName: string) {
	try {
		const storage = await groupsGetAll();
		const groups = storage.filter((group) => group !== groupName);

		await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
		await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`);
	} catch (error) {
		throw error;
	}
}

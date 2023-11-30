import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/config';
import { groupsGetAll } from './groupsGetAll';
import { AppError } from '@utils/AppError';

export async function groupCreate(newGroupName: string) {
	try {
		const groups = await groupsGetAll();

		if (groups.includes(newGroupName)) {
			throw new AppError('Já existe um grupo cadastrado com esse nome.');
		}

		await AsyncStorage.setItem(
			GROUP_COLLECTION,
			JSON.stringify([...groups, newGroupName]),
		);
	} catch (error) {
		throw error;
	}
}

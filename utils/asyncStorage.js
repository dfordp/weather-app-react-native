import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);

    // Clear the storage after 1 minute
    setTimeout(async () => {
      try {
        await AsyncStorage.removeItem(key);
      } catch (error) {
        console.log('Error removing value: ', error);
      }
    }, 60000); // 60000 milliseconds = 1 minute
  } catch (error) {
    console.log('Error storing value: ', error);
  }
};

export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.log('Error retrieving value: ', error);
    }
};
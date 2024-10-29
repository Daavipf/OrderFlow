import AsyncStorage from "@react-native-async-storage/async-storage";
import generateId from "../helpers/generate-id";

export default function useStorage() {
  async function getItems(key) {
    try {
      const dataSerialized = await AsyncStorage.getItem(key);
      return dataSerialized ? JSON.parse(dataSerialized) : [];
    } catch (error) {
      console.error("Erro ao resgatar produtos: ", error);
      return [];
    }
  }

  async function storeItem(key, data) {
    data["ID"] = generateId();
    try {
      let items = await getItems(key);
      items.push(data);
      await AsyncStorage.setItem(key, JSON.stringify(items));
    } catch (error) {
      console.error("Erro ao inserir produto: ", error);
    }
    console.log("Produto inserido", data);
  }

  async function deleteItem(key, itemID) {
    try {
      let items = await getItems(key);
      let newItems = items.filter((item) => {
        return item.ID !== itemID;
      });
      await AsyncStorage.setItem(key, JSON.stringify(newItems));
      return newItems;
    } catch (error) {
      console.error("Erro ao deletar produto: ", error);
      return [];
    }
  }

  return {
    storeItem,
    getItems,
    deleteItem,
  };
}

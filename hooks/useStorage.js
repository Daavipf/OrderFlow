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

  async function getItem(key, itemID) {
    try {
      let items = await getItems(key);
      let singleItem = items.find((item) => {
        return item.ID === itemID;
      });
      return singleItem;
    } catch (error) {
      console.error("Erro ao resgatar produto: ", error);
      return undefined;
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

  async function updateItem(key, data) {
    try {
      let items = await getItems(key);
      let itemIndex = items.findIndex((item) => item.ID === data.ID);
      if (itemIndex !== -1) {
        items[itemIndex] = { ...items[itemIndex], ...data };
        await AsyncStorage.setItem(key, JSON.stringify(items));
        console.log("Produto atualizado");
      } else {
        console.error("Erro ao atualizar produto: Produto não encontrado");
      }
    } catch (error) {
      console.error("Erro ao atualizar produto: ", error);
    }
  }

  return {
    storeItem,
    getItems,
    deleteItem,
    updateItem,
    getItem,
  };
}

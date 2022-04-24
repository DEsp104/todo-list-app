import axios from "axios";


export async function getItems() {
  type Data = {
    data: {
      id: string,
      title: string,
      description: string,
      completed: boolean
    }
  }
  
  const results = await axios.get("https://todolistproje.herokuapp.com/api/items").then((res: Data) => {
    return res.data;
  });
  
  return results;
}
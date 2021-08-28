import axios from 'axios'

export const getMonsters = async () => {
  let response;
  try {
    response = await axios.get('https://jsonplaceholder.typicode.com/users');
    response.statusText = "";
    response.ok = true;
    response.data.monsters = response.data;
  } catch (error) {
    response = error.response;
    response.statusText = 'Lista de monstros indisponível.';
    response.ok = false;
    response.data.monsters = [];
  }
  return response;
};

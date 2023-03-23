export const getChar = async () => {
  try {
    const response = await fetch(`https://api.disneyapi.dev/characters/`);
    console.log(response);
    const data = await response.json(); //to convert to javascript object
    console.log(data.data);

    //creating new array slicing a array of 50 elements data

    const newData = data.data.slice(0, 10);

    return newData;
  } catch (e) {
    console.error(e);
  }
};

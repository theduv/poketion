const getSets = async (req: any, res: any) => {
  try {
    const data = await fetch("https://api.pokemontcg.io/v2/sets");
    const parsedData = await data.json();
    res.send(parsedData);
  } catch (e) {
    return e;
  }
};

export default getSets;

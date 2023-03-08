const fs = require('fs').promises;



async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpson = JSON.parse(fileContent);
  const strings = simpson.map(({id, name}) => `${id}-${name}`);
  console.log(strings);
};

async function simpsonId(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonId = JSON.parse(fileContent);
  const result = simpsonId.find((simpson) => Number(simpson.id) === id);
  if(!result) throw new Error('id não encontrado');
  console.log(result);
  return result;
};

async function filterSimpsons() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    const newArray = simpsons.filter((simpson) => simpson.id !== "10" && simpson.id !== "6");
    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
  }

  async function createSimpsonsFamily() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    const familyIds = [1, 2, 3, 4];
    const simpsonsFamily = simpsons
      .filter((simpson) => familyIds.includes(Number(simpson.id)));
      await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  };

  async function addSimpson() {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    simpsons.push({id: '8',name: 'Nelson Muntz'})
    console.log(simpsons);
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
  }

  async function replaceNelson() {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    const simpsonsWithOutNelson = simpsons.filter((simpson) => simpson.id !== '8');
    const maggie = [{ id: '15', name: 'Maggie Simpson' }]
    const simpsonsWithMaggie = [...simpsonsWithOutNelson, maggie];
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
  };

function main() {
   // readAll();
  // simpsonId(4);
  // filterSimpsons();
  // createSimpsonsFamily();
  // addSimpson();
  replaceNelson();
};

main();
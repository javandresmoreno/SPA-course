// importar la función get Data
import getData from "../utils/getData";

// generamos la vista del home
const Home = async () => {
  const characters = await getData();
  const view = `
  <div class="Characters">
    ${characters.results
      .map(
        (character) => `
    <article class="Character-item">
      <a href="#/${character.id}/">
        <img src="${character.image}" alt="${character.name}"/>
        <h2>${character.name}</h2>
      </a>
    </article>
    `
      )
      .join("")}
  </div>
  `;
  return view;
};

export default Home;

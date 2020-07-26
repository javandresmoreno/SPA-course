const Logo =
  "https://occ-0-92-1723.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABWvcCE9czzpucMfdp5zcd1DoEYp1kvKmqA9pFjGGS6fjz5NbyXAtOpsgI-r52MIjv_HmyR6FP_YoMpgdilhG4bAqL7UazR0NdLn-.png?r=a6e";

const Header = () => {
  const view = `
  <div class="Header-container">
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="#/">
           <img src="${Logo}"/> 
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <a href="#/about/">
          About
        </a>
      </div>
    </div>
  </div> 
  `;
  return view;
};

export default Header;

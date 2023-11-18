import { Header } from "../../components/Header";
import background from "../../assets/background.png"
import './styles.css';
import ItemList from "../../components/ItemList";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background" />

        <div className="info">
          <div className="input">
            <input name="user" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/63003857?v=4" className="pfp" alt="profile pic"></img>
            <div>
              <h3>Daniel Berg</h3>
              <span>@daniellberg</span>
              <p>Disrupt af health goth deep v asymmetrical ascot cred farm-to-table poutine portland 8-bit stumptown bodega boys laboris. Tousled solarpunk cronut synth.</p>
            </div>
          </div>
          <hr />
          <div className="listRepos">
            <h4 className="repos">Repositórios</h4>
            <ItemList title="teste1" description="descrição"/>
            <ItemList title="teste1" description="descrição"/>
            <ItemList title="teste1" description="descrição"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

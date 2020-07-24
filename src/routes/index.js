// aquí se importan los templates (funciones) y páginas que se crearon
import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";

// aquí establezco las rutas que va a tener la aplicación
const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  // mando el template de header a la vista de html
  header.innerHTML = await Header();
};

export default router;
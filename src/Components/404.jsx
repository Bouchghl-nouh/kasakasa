import { Header } from "./Header";
import { Footer } from "./Footer";
import "../CSS/error.css";
export default function Error() {
  return (
    <>
      <Header />
      <div className="error">
        <p className="fourOnefour">404</p>
        <p className="text">Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Footer />
    </>
  );
}

import "./App.css";
import CartProvider from "./context/CartProvider";
import MainLayout from "./layouts/MainLayout";
import AuthPage from "./pages/AuthPage";
import ContactPage from "./pages/ContactPage";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      <CartProvider>
        <MainLayout>
          <HomePage />
          {/* <ShopPage /> */}
          {/* <ContactPage /> */}
          {/* <AuthPage /> */}
        </MainLayout>
      </CartProvider>
    </>
  );
}

export default App;

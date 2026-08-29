import "./App.css";
import MainLayout from "./layouts/MainLayout";
import AuthPage from "./pages/AuthPage";
import ContactPage from "./pages/ContactPage";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      <MainLayout>
        <HomePage />
        {/* <ShopPage /> */}
        {/* <ContactPage /> */}
        {/* <AuthPage /> */}
      </MainLayout>
    </>
  );
}

export default App;

import { useState } from 'react'
import Header from './components/Header'
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Flowers from './pages/Flowers';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  function renderPage() {
    if (currentPage === "home") return <Home />;
    if (currentPage === "flowers") return <Flowers />;
    if (currentPage === "about") return <About />;
  }

  return (
    <>
    <div className="app-wrapper">
      <Header setCurrentPage={setCurrentPage} />
      <PageContent>
        { renderPage()}
      </PageContent>
      <Footer />
      </div>
    </>
  )
}

export default App

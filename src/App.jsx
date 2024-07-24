import Header from './common/Header/Header'
import Footer from './common/Footer/Footer'
import MainContent from './sections/MainContent/MainContent'
import { ThemeProvider } from './common/ThemeContext'
import './App.css'


function App() {

  return (
    <>
     <ThemeProvider>
        <div className='wrapper-main'>
          <Header />
          <main>
            <MainContent />
          </main>
          <Footer />
        </div>
     </ThemeProvider>
     
    </>
  )
}

export default App

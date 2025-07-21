import Header from './common/Header/Header'
import Footer from './common/Footer/Footer'
import { ThemeProvider } from './common/ThemeContext'
import './App.css'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
     <ThemeProvider>
        <div className='wrapper-main'>
          <Header />
          <main>
            <Outlet /> 
          </main>
          <Footer />
        </div>
     </ThemeProvider>
     
    </>
  )
}

export default App

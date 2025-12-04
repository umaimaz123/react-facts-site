import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode><App /></StrictMode>
// )

const root = createRoot(document.getElementById('root'))

function Header() {
  return (
    <header className="header">
      <img src="src/assets/react.svg" className="nav-logo" alt="React logo" />
      <nav>
        <ul className='nav-list'>
          <li> Pricing </li>
          <li> About </li>
          <li> Contact </li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <main>
        <h1> Fun Facts about React!</h1>
          <ul>
            <li> Was first released in 2013 </li>
            <li> Was originally created by Jordan Walke </li>
            <li> Has well over 200K stars on GitHub </li>
            <li> Is maintained by Meta </li>
            <li> Powers thousands of enterprise apps, including mobile apps </li>
            <li> Was first released in 2013 </li>
          </ul>
      </main>
  )
}

function Footer() {
  return (
    <footer>
      © 2025 Fun Facts About React. All rights reserved.
    </footer>
  )
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
)
}
root.render(
    <Page />
)

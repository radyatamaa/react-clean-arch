
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { Header } from './ui/Header'
import { Auth } from './ui/Auth'
import { User } from './ui/User'
import { Front } from './ui/Front'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
            <Route path="/auth" Component={Auth} />
            <Route path="/user" Component={User}/>
            <Route path="/" Component={Front}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App

import { Outlet } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <>
      <div className='bg-white'>
        <Outlet />
      </div>
    </>
  )
}

export default App

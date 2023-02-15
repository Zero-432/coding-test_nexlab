import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './components/menu/Menu'
import Chat from './pages/chat/Chat'

function App() {
    return (
        <div className="flex">
            <BrowserRouter>
                <Menu />
                <div className="w-5/6 py-10 px-20">
                    <Routes>
                        <Route path="/">
                            <Route index element={<Chat />} />
                            <Route path="chat" element={<Chat />} />
                            <Route path="chat">
                                <Route path=":id" element={<Chat />} />
                            </Route>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App

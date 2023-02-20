import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './components/menu/Menu'
import DataContextProvider from './contexts/DataContext'
import Chat from './pages/chat/Chat'

function App() {
    return (
        <div className="App">
            <div className="wrapper max-[768px]:w-full max-[768px]:h-full max-[768px]:p-3">
                <BrowserRouter>
                    <DataContextProvider>
                        <Menu />
                        <div className="max-[768px]:p-0 max-[1280px]:w-full max-[1280px]:py-5 max-[1280px]:px-10 w-5/6 py-10 px-20">
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
                    </DataContextProvider>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App

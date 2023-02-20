import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { useLocation } from 'react-router-dom'

const initData = {
    data: [],
}

type IData = {
    data: []
    addData: (message: object) => void
    reloadData: (url: string) => void
}

export const DataContext = createContext<IData>({} as IData)

const getInitialStore = (path: string) => {
    const data = localStorage.getItem(path)
    return data ? JSON.parse(data) : initData
}

function DataContextProvider(props: any) {
    const path = useLocation().pathname.split('/')[2]

    const [data, setData] = useState(getInitialStore(path))
    const { children } = props

    useEffect(() => {
        if (!path) return

        if (Object.keys(localStorage).length === 0) {
            localStorage.setItem(path, JSON.stringify(data))
        } else {
            Object.keys(localStorage).forEach((key) => {
                if (path !== key) {
                    localStorage.setItem(path, JSON.stringify(data))
                }
            })
        }
    }, [data, path])

    const addData = (message: object) => {
        setData((prev: any) => ({
            ...prev,
            data: [...prev.data, message],
        }))
    }

    const reloadData = (url: string) => {
        setData(getInitialStore(url))
    }

    const providerValue = useMemo(
        () => ({ addData, reloadData, ...data }),
        [data]
    )

    return (
        <DataContext.Provider value={providerValue}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)

export default DataContextProvider

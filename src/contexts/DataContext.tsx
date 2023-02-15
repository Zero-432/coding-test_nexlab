import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'

const initData = {
    data: [],
}

type IData = {
    data: []
    addData: (message: object) => void
}

export const DataContext = createContext<IData>({} as IData)

const getInitialStore = () => {
    const data = localStorage.getItem('data')
    return data ? JSON.parse(data) : initData
}

function DataContextProvider(props: any) {
    const [data, setData] = useState(getInitialStore)

    const { children } = props

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data])

    const addData = (message: object) => {
        setData((prev: any) => ({
            ...prev,
            data: [...prev.data, message],
        }))
    }

    const providerValue = useMemo(() => ({ addData, ...data }), [data])

    return (
        <DataContext.Provider value={providerValue}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)

export default DataContextProvider

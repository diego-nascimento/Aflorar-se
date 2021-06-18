import React, { useContext, useMemo } from 'react'

interface ILoadingContext{
  Loading: boolean
  setLoading: any
}

const LoadingContext = React.createContext<ILoadingContext>({
  Loading: false,
  setLoading: null
})

const LoadingStorage: React.FC = ({children}) =>{
  const [Loading, setLoading] = React.useState<boolean>(false)

  const values = useMemo(() => ({Loading, setLoading}) , [
    Loading, setLoading
  ])

  return(
    <LoadingContext.Provider value={values}>
      {children}
    </LoadingContext.Provider>
  )
}

const useLoading = () =>{
  const context = useContext(LoadingContext)
  return context
}

export {useLoading, LoadingStorage}
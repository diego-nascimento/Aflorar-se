import React from 'react'

interface ILoadingContext{
  Loading: boolean
  setLoading: any
}

export const LoadingContext = React.createContext<ILoadingContext>({
  Loading: false,
  setLoading: null
})

export const LoadingStorage: React.FC = ({children}) =>{
  const [Loading, setLoading] = React.useState<boolean>(false)

  return(
    <LoadingContext.Provider value={{Loading, setLoading}}>
      {children}
    </LoadingContext.Provider>
  )
}
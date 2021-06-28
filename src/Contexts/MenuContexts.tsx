import React, { useContext, useMemo } from 'react'

interface IMenuContext{
  MenuState: boolean
  setMenuState: any
}

const MenuContext = React.createContext<IMenuContext>({
  MenuState: false,
  setMenuState: null
});

const MenuStorage: React.FC = ({children}) =>{
  const [MenuState, setMenuState] = React.useState<boolean>(false)

  const values = useMemo(() => ({MenuState, setMenuState}), [MenuState, setMenuState])


  return(
    <MenuContext.Provider value={values}>
      {children}
    </MenuContext.Provider>
  )
}

const useMenu = () =>{
  const context = useContext(MenuContext)
  return context
}

export {useMenu, MenuStorage}
import React from 'react'

interface IMenuContext{
  MenuState: boolean
  setMenuState: any
}

export const MenuContext = React.createContext<IMenuContext>({
  MenuState: false,
  setMenuState: null
});

export const MenuStorage: React.FC = ({children}) =>{
  const [MenuState, setMenuState] = React.useState<boolean>(false)

  return(
    <MenuContext.Provider value={{MenuState: MenuState, setMenuState}}>
      {children}
    </MenuContext.Provider>
  )
}
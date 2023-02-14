import { createContext } from 'react'
import { IContext, IProvider } from '../interfaces/context'

export const Context = createContext({} as IContext)

const Provider = ({children}: IProvider) => {

  return <Context.Provider value={{}}>
    {children}
  </Context.Provider>
}

export default Provider
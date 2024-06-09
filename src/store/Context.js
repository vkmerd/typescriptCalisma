import { useContext } from "react"
import { createContext } from "react"

const authContext = createContext(null)

export default function useAuth(){
    return useContext(authContext)
}
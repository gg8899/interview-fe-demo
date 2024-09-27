
import { useLocation } from 'react-router-dom'

export default () => {
    const state = useLocation()

    return <>Welcome！！！{state?.state?.username}</>
}
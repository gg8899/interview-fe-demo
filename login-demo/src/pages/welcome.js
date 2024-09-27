
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Component = () => {
    const state = useLocation()
    const navigate = useNavigate();

    useEffect(() => {
        if (!state?.state?.username) {
            navigate('/login')
        }
    }, [])
    return <>Welcome！！！{state?.state?.username}</>
}

export default Component
import { useNavigate } from 'react-router-dom'

export default function useNavigateAndScroll()  {
    const navigate = useNavigate()

    return (sectionId) => {
        if (window.location.pathname === '/') {
            const element = document.getElementById(sectionId)
            if(element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            navigate('/')

            setTimeout(() => {
                const interval = setInterval(() => {
                    const element = document.getElementById(sectionId)
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                        clearInterval(interval)
                    }
                }, 100)
            }, 300)
        }
    }
}
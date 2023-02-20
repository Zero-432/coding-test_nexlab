import { useState, useEffect, useRef } from 'react'

export default function useOuterClick(initialIsVisible: boolean) {
    const [isComponentVisible, setIsComponentVisible] =
        useState(initialIsVisible)
    const outsideRef = useRef<HTMLDivElement>(null)

    const handleClickOutside = (event: Event) => {
        if (
            outsideRef.current &&
            !outsideRef.current.contains(event.target as HTMLElement)
        ) {
            setIsComponentVisible(true)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    return { outsideRef, isComponentVisible, setIsComponentVisible }
}

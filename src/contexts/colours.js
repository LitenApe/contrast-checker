import { h, createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { contrast } from '../utils';

export const ColoursContext = createContext({
    foreground: '000',
    background: 'fff',
    contrast: 21
});

export const ColoursProvider = ({ children }) => {
    const [ foreground, setForeground ] = useState('000')
    const [ background, setBackground ] = useState('fff')
    const [ ratio, setRatio ] = useState(21)

    useEffect(() => {
        const value = contrast(foreground, background)
        if (value === null) return

        const [integers] = value.toString().split('.')
        const divideBy = parseInt('1000'.slice(0, integers.length*-1), 10)

        setRatio(parseInt((value*divideBy), 10)/divideBy)
    }, [foreground, background])

    return (
        <ColoursContext.Provider
            value={{
                foreground,
                background,
                ratio,
                setForeground,
                setBackground
            }}
        >
            { children }
        </ColoursContext.Provider>
    );
};
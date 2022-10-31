
import { ReactNode } from 'react';
import './FadeIn.css';

export const FadeIn: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className='fade-in'>
            {children}
        </div>
    )
}

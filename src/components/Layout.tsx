import { ReactNode } from 'react';
import './Layout.css';

export const Row: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    return (
        <div className='row'>
            {children}
        </div>
    )
}

export const Col: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    return (
        <div className='col'>
            {children}
        </div>
    )
}

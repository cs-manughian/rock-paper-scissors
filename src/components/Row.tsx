import { ReactNode } from 'react';
import './Row.css';

export const Row: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    return (
        <div className='row'>
            {children}
        </div>
    )
}

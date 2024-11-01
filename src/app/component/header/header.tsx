import React from 'react';
import Link from 'next/link';
import style from '../header/header.module.css';

const header = () => {
    return (
        <div className={style.container}>
            <h1 className={style.heading}>welcome back</h1>
            <ul>
                
                    <li>
                        <Link href="/"> <span className={style.list}>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <span className={style.list}>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span className={style.list}>Contact</span>
                        </Link>
                    </li>
                </ul>
            
        </div>
    );
};

export default header;

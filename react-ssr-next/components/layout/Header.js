import React from 'react';
import Link from 'next/link';

export const Header = () => (
    <ul>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/faq">FAQ</Link></li>
    </ul>
)
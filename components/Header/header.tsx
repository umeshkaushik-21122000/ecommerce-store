import React from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
const Header = () => {
    const router=useRouter();
  return (
    <div className='flex justify-end items-end px-6'>
        <div className='flex gap-6'>
            <Button onClick={()=>{router.push('/')}}>Home</Button>
            <Button onClick={()=>{router.push('/cart')}}>cart</Button>
            <Button onClick={()=>{router.push('/history')}}>order history</Button>
        </div>
    </div>
  )
}

export default Header;
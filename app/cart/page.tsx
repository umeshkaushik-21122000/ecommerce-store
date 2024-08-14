'use client';
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { applyPromocode, confirmOrder, getCart, requestPromocode } from '../actions';
import { useRouter } from 'next/navigation';
import { TableComponent } from '@/components/Table/table';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header/header';

 const Page = () => {
    const [loaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(null);
    const [code,setCode]=useState('');
    const router = useRouter();
    const [res,setRes]=useState('');
    const handlePromoCode= async() => {
        const customerId=Cookies.get('customerId')||'';
        const code= await requestPromocode(customerId);
            setCode(code);
    }
    const handleApplyCode= async() =>{
        const customerId=Cookies.get('customerId')||'';
        const response = await applyPromocode(code,customerId);
            console.log(response);
            if(response){
                handleCart();
            }
            setRes(response);

    }
    const handleCart = async () => {
            setIsLoaded(false);
        const customerId = Cookies.get('customerId');
        if (!customerId) {
            router.push('/signIn');
        }
        else {
            const items =await getCart(customerId);
            setItems(items);
            setIsLoaded(true);
        }
    }
    const handleOrder = async () => {
        const customerId=Cookies.get('customerId')||'';
        await confirmOrder(customerId);
            router.push('/');
    }
    useEffect(() => {
        handleCart();
    }, []);
    if(!loaded) return <div>loading....</div>;
    return (
        <div className='p-12'>
            <Header />
            <Button onClick={handlePromoCode} className='bg-red-500 mb-8'>GET PROMOCODE</Button>
            {code && <span className='border p-5 border-gray-800 mx-5'>{code}</span>}
            {code &&<Button  onClick={handleApplyCode} className='bg-green-500 mx-5'>APPLY</Button>}
            <TableComponent codeResult={res} data={items} />
            {loaded && items && <Button onClick={handleOrder} className='p-5 bg-green-600'>Place Order</Button>}
        </div>
    )
}





  export default Page;
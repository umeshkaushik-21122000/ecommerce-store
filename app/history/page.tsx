'use client';
import React, { useEffect, useState } from 'react'
import { getCustomerId, getOrders } from '../actions';
import { useRouter } from 'next/navigation';
import { Table } from 'lucide-react';
import { TableComponent } from '@/components/Table/table';
import Header from '@/components/Header/header';

 const Page = () => {
  const [orders,setOrders]=useState<any>(null);
  const customerId=getCustomerId()||'';
  const router=useRouter();
  if(!customerId){
    router.push('/signIn');
  }
  const handleOrders=async()=>{
    const allOrders=await getOrders(customerId);
      setOrders(allOrders);
  }
  useEffect(()=>{
    handleOrders();
  },[]);
  return (
    <div className='py-12'>
      <Header />
      {orders &&orders.date.map((dates:string,index:number)=>(
        <div className='flex flex-col gap-y-6 p-6'>
          <span className='bg-blue-500 w-[100px] text-black p-2 text-center rounded rouned-3 opacity-70'>{dates}</span>
          <TableComponent codeResult={orders.orders[index].couponCode} data={orders.orders[index]} />
        </div>
      ))}
    </div>
  )
}
export default Page;

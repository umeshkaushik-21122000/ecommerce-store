'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { Products } from "@/components/products/Products";
import { getAllProducts,checkCustomer } from './actions';
import ProductSkeleton from "@/components/skeletons/ProductSkeleton";
import Header from '@/components/Header/header';

const Home = () => {
  return (
    <section className="pt-14">
      <Suspense fallback={<ProductSkeleton extraClassname="" numberProducts={25} />}>
        <AllProducts />
      </Suspense>
    </section>
  );
};

const AllProducts = () => {
  const [products, setProducts] = useState(null);
  const router = useRouter();
  const fetchProducts = async () => {
    const data = await getAllProducts();
      console.log(data);
      if(typeof(data)=='object'){
        setProducts(data.products);
      }
      else{
        router.push('/signUp');
      }
  };

  const handleAuth = async() => {
    const customerId = Cookies.get('customerId');
    if (!customerId) {
      router.push('/signUp');
    }
    else{
      const boolean=await checkCustomer(customerId);
      if(!boolean){
        router.push('/signIn');
      }
      fetchProducts();
    }
  }
  useEffect(() => {
    handleAuth();
  }, []);

  if (!products) return <ProductSkeleton extraClassname="" numberProducts={25} />;

  return (
    <div>
        <Header />
        <Products products={products} extraClassname="" />
    </div>
);
};

export default Home;

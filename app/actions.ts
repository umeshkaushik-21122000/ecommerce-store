import Cookies from 'js-cookie';


export const getCustomerId = () => {
    const customerId = Cookies.get('customerId');
    return customerId;
}



export const getAllProducts = async () => {
    try{
        const response=await fetch('https://backend-kpme.onrender.com/products');
        const data= await response.json();
            console.log(response.status);
        return data;
    }
    catch(err){
        console.error(" not able to fetch all the products");
        return err;
    }
};

export const signUp = async (email:any,password:any) => {
    try{
        const response=await fetch('https://backend-kpme.onrender.com/signUp',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({email,password}),
        });
        const data= await response.json();
        console.log(data);
        if (data) {
            Cookies.set('customerId', data.toString(), { expires: 7 }); 
        }
        return data;
    }
    catch(err){
        console.error(err);
    }
};

export const signIn = async (email:any,password:any) => {
    try{
        const response=await fetch('https://backend-kpme.onrender.com/signIn',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json', // Set the content type header
            },
            body:JSON.stringify({email,password}),
        });
        const data= await response.json();
        if (data) {
            // Set cookie with customerId
            Cookies.set('customerId', data, { expires: 7 }); // Expires in 7 days
        }
        return data;
    }
    catch(err){
        console.error(err);
    }
};

export const addToCart = async ( item:any, customerId : any) => {
    try {
        console.log(item);
        const response = await fetch('https://backend-kpme.onrender.com/addToCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'customerid': customerId, 
            },
            body: JSON.stringify(item),
        });

        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

export const requestPromocode = async (customerId: string) => {
    try {
        const response = await fetch('https://backend-kpme.onrender.com/promocode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'customerid': customerId, 
            },
        });

        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error('Error requesting promocode:', err);
    }
};


export const applyPromocode = async ( promocode:string, customerId:string) => {
    try {
        const response = await fetch('https://backend-kpme.onrender.com/applypromocode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'customerid': customerId, 
            },
            body: JSON.stringify({ promocode }),
        });

        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error applying promocode:', err);
        return err;
    }
};

export const confirmOrder = async (customerId: string) => {
    try {
        const response = await fetch('https://backend-kpme.onrender.com/confirmOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'customerid': customerId, 
            },
        });

        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error confirming order:', err);
    }
};

export const getCart = async (customerId: string) => {
    try {
        const response = await fetch('https://backend-kpme.onrender.com/cart', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'customerid': customerId, 
            },
        });

        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error fetching cart:', err);
    }
};

export const getOrders = async (customerId: string) => {
    try {
        const response = await fetch('https://backend-kpme.onrender.com/orders', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'customerid': customerId, 
            },
        });
        console.log("this is reasponse for orders",response);
        const data = await response.json();
        console.log("and this is data",data);
        return data;
    } catch (err) {
        console.error('Error fetching orders:', err);
    }
};

export const checkCustomer = async (customerId: string) => {
    try {
        const response = await fetch('https://backend-kpme.onrender.com/isCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'customerid': customerId, 
            },
        });

        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error('Error fetching orders:', err);
    }
};


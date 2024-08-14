'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {signIn} from '../actions';
import { useState } from "react"; 
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const [email,setEmail]=useState('');
    const [password,setPasword]=useState('');

    const handleSignIn = ()=>{
            signIn(email,password);
            router.push('/');
    }
  return (
    <div className="flex flex-col h-[100vh]">
    <Card className="mx-auto my-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Enter your email and password to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input onChange={(e)=>setEmail(e.target.value)} value={email} id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input onChange={(e)=>setPasword(e.target.value)} value={password} id="password" type="password" required />
          </div>
          <Button onClick={handleSignIn} type="submit" className="w-full">
            Login
          </Button>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}
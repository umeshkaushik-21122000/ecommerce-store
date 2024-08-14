'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {signUp} from '../actions';
import { useState } from "react"; 
import { useRouter } from 'next/navigation';

export default function SignUp() {
    const router = useRouter();
    const [email,setEmail]=useState('');
    const [password,setPasword]=useState('');

    const handleSignUp = ()=>{
            signUp(email,password).then(()=>{
              router.push('/');
            });
    }
  return (
    <div className="flex items-center h-[100vh]">
    <Card className="mx-auto my-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">SignUp</CardTitle>
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
          <Button onClick={handleSignUp} type="submit" className="w-full">
            SignUp
          </Button>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}
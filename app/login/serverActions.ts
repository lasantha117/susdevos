'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';



import { createSessionCookie, login } from '@/modules/auth';


export async function onSubmit(
  oldState: any,
  formData: FormData,
  rememberMe: boolean,
) {
  try {
    const userId = await login(Object.fromEntries(formData));
    const cookie = await createSessionCookie(userId);
    if (rememberMe) {
      // <-- Check if rememberMe is true
      cookie.attributes.maxAge = 30 * 24 * 60 * 60; // 30 days in seconds
    }
    cookies().set(cookie.name, cookie.value, cookie.attributes);
  } catch (error: any) {
    return { error: error.message };
  }
  return redirect('/'); // NextJs uses errors for redirects
}
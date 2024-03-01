import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import Card from '@/components/Card';
import ClientForm from '@/components/ClientForm';
import { lucia, validateRequest } from '@/modules/auth/lucia';

import AboutCard from "../components/AboutCard"


export default async function Page() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect('/login');
  }
  return (
    <div className="mt-0">
        <AboutCard />
    </div>
  );
}

async function logout() {
  'use server';
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: 'Unauthorized',
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect('/login');
}

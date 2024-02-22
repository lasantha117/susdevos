import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import Card from '@/components/Card';
import ClientForm from '@/components/ClientForm';
import { lucia, validateRequest } from '@/modules/auth/lucia';

export default async function Page() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect('/login');
  }
  return (
    <div className="flex justify-center container p-32">
      <div className="flex gap-8">
        {/* <h1>Hi, {user.username}!</h1>
        <p>Your user ID is {user.id}.</p> */}
        {/* <ClientForm action={logout} initialState={{ error: '' }}>
          <button>Sign out</button>
        </ClientForm> */}
        <Card
          title="AI-Driven Emissions Intelligence"
          content="Harness the power of AI for precise emissions 
        calculations and recommendations, optimizing 
        your climate mitigation strategies."
         
        ></Card>
        <Card
          title="AI-Driven Emissions Intelligence"
          content="Harness the power of AI for precise emissions 
        calculations and recommendations, optimizing 
        your climate mitigation strategies."
         
        ></Card>
        <Card
          title="AI-Driven Emissions Intelligence"
          content="Harness the power of AI for precise emissions 
        calculations and recommendations, optimizing 
        your climate mitigation strategies."
         
        ></Card>
      </div>
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

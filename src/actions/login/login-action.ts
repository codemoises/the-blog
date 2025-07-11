'use server';

import { verifyPassword } from '@/lib/login/manage-login';
import { asyncDelay } from '@/utils/async_delay';

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  await asyncDelay(5000);

  if (!(formData instanceof FormData)) {
    return {
      username: '',
      error: 'Dados inválidos',
    };
  }

  // Dados que o usuário digitou no form
  const username = formData.get('username')?.toString().trim() || '';
  const password = formData.get('password')?.toString().trim() || '';


  return {
    username: '',
    error: '',
  };
}

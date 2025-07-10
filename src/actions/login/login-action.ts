'use server';

import { asyncDelay } from '@/utils/async_delay';

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  await asyncDelay(5000);

  return {
    username: '',
    error: 'Teste de erro',
  };
}

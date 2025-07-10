'use server';

import { asyncDelay } from '@/utils/async_delay';

export async function logutAction() {
  await asyncDelay(5000);
}

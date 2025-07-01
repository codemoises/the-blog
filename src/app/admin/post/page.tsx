import { Button } from '@/components/Button';
import { InputCheckBox } from '@/components/InputCheckBox';
import { InputText } from '@/components/InputText';

export const dynamic = 'force-dynamic';

export default async function AdminPostPage() {
  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText labelText='Nome' placeholder='Digite seu nome' />
        <InputText labelText='Sobrenome' placeholder='Digite seu sobrenome' />
        <InputCheckBox labelText='Sobrenome' />
        <InputText
          disabled
          labelText='Sobrenome'
          placeholder='Digite seu sobrenome'
        />
        <InputText
          disabled
          labelText='Sobrenome'
          placeholder='Digite seu sobrenome'
        />
        <InputText
          labelText='Sobrenome'
          placeholder='Digite seu sobrenome'
          readOnly
        />
        <InputText labelText='Sobrenome' placeholder='Digite seu sobrenome' />
        <div className='mt-4'>
          <Button type='submit'>Enviar</Button>
        </div>
      </div>
    </form>
  );
}

import { InputText } from '@/components/InputText';

export const dynamic = 'force-dynamic';

export default async function AdminPostPage() {
  return (
    <div className='flex flex-col gap-6'>
      <InputText labelText='Nome' placeholder='Digite seu nome' />
      <InputText labelText='Sobrenome' placeholder='Digite seu sobrenome' />
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
    </div>
  );
}

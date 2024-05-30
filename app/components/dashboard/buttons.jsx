import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {deleteData} from '../../../firebase/dbQuery'

export function CreateInvoice() {
  return (
    <Link
      href="/admin/upload"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Upload Photo</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdatePhotoData({ id }) {
  return (
    <Link
      href={`/admin/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export async function DeleteImageData({ id ,}) {
   const handleDelete = async (e)=>{
      try {
       let isDeleted= await deleteData('images', id);
       setMessage('Image deta deleted')
       handleReset(e)
      } catch (error) {
          setError(error.message)
      }
   }
  return (
    <>
       
      <button onClick={handleDelete} className="rounded-md border p-2 text-red-500 hover:bg-red-500/15">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    
    </>
  );
}

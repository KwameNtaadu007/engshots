import Breadcrumbs from '../../components/dashboard/breadcrumbs'
import EditForm from '../../components/dashboard/editform'
import { getImageById } from "../../../firebase/dbQuery"
export default async function page({ params }) {
  const imageId = params?.id;
  const imageData = await getImageById(imageId);
  
  return (

    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'admin', href: '/admin' },
          {
            label: 'review photo',
            href: `/admin/${imageId}`,
            active: true,
          },
        ]}
      />
      <main className='w-full flex justify-center'>
        <EditForm imageData={imageData} />
      </main>
    </>
  )
}

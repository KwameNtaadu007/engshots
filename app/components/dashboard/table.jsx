import { UpdatePhotoData } from './buttons'; // Assuming this imports a button component
import { getData } from '../../../firebase/dbQuery';


export default async function ImagesTable() {
  const imagesData = await getData('images'); // Replace with your actual data or fetching logic
  
  return (
    <div className="mt-6 flow-root">
      <div className="lg:hidden">
        {imagesData&&imagesData.map((image) => (
          <div
            key={image.id} // Assuming url is unique for each image
            className="mb-2 w-full rounded-md bg-white p-4"
          >
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex gap-2 items-center">
            
                <div>{image.category}</div>
                <p>{image.fileName}</p>
              </div>
              <p className="text-sm text-gray-500">{image.createdBy}</p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <p className="text-gray-600">{image.description}</p>
              <div className="flex justify-end gap-2">
                <UpdatePhotoData id={image.id} />
              </div>
            </div>
          </div>
        ))}
</div>

      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 lg:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Filename
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Category
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Created By
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Created At
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {imagesData&&imagesData.map((image) => (
                <tr
                  key={image.id} // Assuming url is unique for each image
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    {image?.fileName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {image?.description}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {image?.category}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {image?.createdBy}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* You can format the date here if needed */}
                    {image?.createdAt}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <UpdatePhotoData id={image.id} /> {/* Assuming UpdatePhotoData handles image url */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

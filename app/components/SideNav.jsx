
import SidenavLinks from './SidenavLinks';


export default function SideNav() {
  return (
    <div className="flex h-full flex-col p-2">
        <div className="flex grow flex-wrap gap-2 items-center space-x-2 ">
          <SidenavLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 lg:block"></div> */}
      </div>
    </div>
  );
}

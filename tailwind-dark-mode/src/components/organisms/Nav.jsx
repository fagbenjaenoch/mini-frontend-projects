import DesktopNav from "../molecules/DesktopNav";

export default function Nav() {
  return (
    <div className="mb-4">
      <div className="hidden sm:block">
        <DesktopNav />
      </div>
      <div className="block sm:hidden">
        <DesktopNav />
      </div>
    </div>
  );
}

import Auth from "@/components/ui_components/Auth";
import Navbar from "@/components/ui_components/Nabvar";

export default async function Home() {

  return (<>
    <Navbar />
    <main className="w-full flex p-4 justify-center items-center">
      <div className="max-w-lg mt-8 md:h-[70vh]">
        <Auth />
      </div>
    </main>
  </>
  );
}

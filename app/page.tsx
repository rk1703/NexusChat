import Auth from "@/components/ui_components/Auth";

export default async function Home() {

  return (
    <main className="w-full flex p-4 justify-center items-center">
      <div className="max-w-lg mt-8 md:h-[70vh]">
        <Auth/>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-32">
      <main className="">
        <div>
          <span className="text-[#ffcc73] my-6">-Hello</span>
          <h1 className="font-bold">
            I'm
            <span className="text-[#ffcc73]">Bojan</span> Bosnic
          </h1>
          <p className="max-w-2xl	text-[#bfbfc0]">
            This is <span className="text-[#ffcc73]">Bojan Bosnic</span> , Web
            Developer who lives in Gradiska, Bosnia and Herzegovina. I'm
            creative and diligent, looking for working around globe.
          </p>
          <button
            type="button"
            class="text-black bg-[#ffcc73] uppercase hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium  text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Download Cv{" "}
          </button>
        </div>
      </main>
    </div>
  );
}

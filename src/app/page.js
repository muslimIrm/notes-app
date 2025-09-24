
import List from "./components/list/List";
export default function Home() {
  return (
    <>
      <div className="max-w-dvw !py-8 !overflow-hidden">
          <div className="container !gap-20">
            <div className="content">
              <h1 className="text-3xl sm:text-4xl md:text-5xl">Notes</h1>
            </div>
            <div className="content !flexm !items-center !justify-center">
              <List/>
            </div>

            
          </div>
          
      </div>
    </>
  );
}

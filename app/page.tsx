import Animate from "./_components/Animate";
import Homepage from "./_components/Homepage";
import ImageSlider from "./_components/ImageSlider";

export default function App() {
  return (
    <main className="w-screen">
      <div className="max-w-[1100px] mx-auto">
        <Animate>
          <Homepage />
        </Animate>
      </div>
    </main>
  );
}

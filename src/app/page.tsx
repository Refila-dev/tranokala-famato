import HomePage from "./pages/home/home-page";
import Archive from './pages/archive/archive-page';

export default function Home() {
  return (

    <div>
      <section id="tongasoa">
        <HomePage />
      </section>
      <section id="tahiry">
        <Archive />
      </section>
    </div>
  );
}

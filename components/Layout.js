import Navbar from './Navbar';

export default function Layout(props) {
  return (
    <div className="font-manrope">
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

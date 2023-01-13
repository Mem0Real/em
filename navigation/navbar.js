export default function Navbar() {
  return (
    <nav style={{ display: "flex", backgroundColor: "white", color: "black" }}>
      <h1 style={{ padding: "5px" }}>ethio-machineries</h1>
      <ul style={{ display: "flex", marginLeft: "5em" }}>
        <li style={{ padding: "12px", listStyle: "none" }}>Home</li>
        <li style={{ padding: "12px", listStyle: "none" }}>Categories</li>
        <li style={{ padding: "12px", listStyle: "none" }}>Services</li>
        <li style={{ padding: "12px", listStyle: "none" }}>About</li>
        <li style={{ padding: "12px", listStyle: "none" }}>Contact Us</li>
      </ul>
    </nav>
  );
}

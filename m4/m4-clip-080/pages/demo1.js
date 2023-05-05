import { useState } from "react";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div>Here is where blog posts would go...</div>
    </div>
  );
}

function Header({ darkTheme, toggleTheme }) {
  return (
    <>
      <b>My Blog</b>
      <hr />
    </>
  );
}

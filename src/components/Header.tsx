function Header() {
  return (
    <header className="bg-slate-300">
      <nav className="container flex items-center justify-between px-8 py-4 mx-auto">
        <div>
          <a href=""> My Logo</a>
        </div>
        <div className="flex gap-12 items-center text-gray-600 text-md">
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">FAQ</a>
          <a href="">Reviews</a>
          <a href="">Blog</a>
        </div>
        <div>
          <button className="bg-blue-600 px-4 py-2 rounded-lg text-white">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import Link from 'next/link';

interface NavLink {
  name: string;
  link: string;
}

const Navigation = ({ navLinks }: { navLinks: NavLink[] }) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-4">
        {navLinks.map((link) => (
          <li key={link.link}>
            <Link
              href={link.link}
              className="text-lg text-blue-400 hover:text-blue-800"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

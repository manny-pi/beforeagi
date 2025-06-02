import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <Link href="/">
          <code><strong>beforeagi.org</strong></code>
        </Link>
      </div>
    </header>
  );
}

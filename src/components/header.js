import Link from "next/link";

export default function Header() {
  return (
    <main>
      <Link href={"/"}>
        <a>
          <h1>escalib</h1>
        </a>
      </Link>
    </main>
  );
}

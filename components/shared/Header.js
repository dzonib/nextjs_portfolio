import Link from 'next/link'
import '../../styles/main.scss'

export default function Header({ children, title }) {
  return (
    <>
      <p> { title } </p>

       { children }

       <p className="custom-class">I am styled P element</p>
       <p className="custom-class-file">I am styled P element from FILE</p>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/portfolios">
        <a>Portfolios</a>
      </Link>

      <Link href="/blogs">
        <a>Blogs</a>
      </Link>

      <Link href="/cv">
        <a>CV</a>
      </Link>

      <style jsx>{`
        a {
          font-size: 20px; 
        };

        .custom-class {
          color: red;
        }
      `}</style>
    </>
  )
}
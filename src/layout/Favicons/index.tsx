interface Favicon {
  rel: string
  href: string
  sizes?: string
  type?: string
}

interface FaviconsProps {
  favicons: Favicon[]
}

export const Favicons: React.FC<FaviconsProps> = ({ favicons }) => {
  return (
    <>
      {favicons.map((favicon, index) => (
        <link
          key={index}
          rel={favicon.rel}
          sizes={favicon.sizes}
          type={favicon.type}
          href={favicon.href}
        />
      ))}
    </>
  )
}

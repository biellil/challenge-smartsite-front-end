import { BrowserRouter } from 'react-router-dom'
import { Routers } from './Router'
import { Favicons } from './layout/Favicons'
import { GlobalStyle } from './styles/global'

const faviconsData = [
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: 'https://scontent.frec30-1.fna.fbcdn.net/v/t39.30808-1/370286420_719263263573586_5852064656480618895_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=F6w5RlMQ7IEAX872_JZ&_nc_ht=scontent.frec30-1.fna&oh=00_AfDYc7x2eUnGzDTuDUhNeS5P54YpL5smYb-ApQLN4VFr2A&oe=65BDC4A5',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: 'https://scontent.frec30-1.fna.fbcdn.net/v/t39.30808-1/370286420_719263263573586_5852064656480618895_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=F6w5RlMQ7IEAX872_JZ&_nc_ht=scontent.frec30-1.fna&oh=00_AfDYc7x2eUnGzDTuDUhNeS5P54YpL5smYb-ApQLN4VFr2A&oe=65BDC4A5',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: 'https://scontent.frec30-1.fna.fbcdn.net/v/t39.30808-1/370286420_719263263573586_5852064656480618895_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=F6w5RlMQ7IEAX872_JZ&_nc_ht=scontent.frec30-1.fna&oh=00_AfDYc7x2eUnGzDTuDUhNeS5P54YpL5smYb-ApQLN4VFr2A&oe=65BDC4A5',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: 'https://scontent.frec30-1.fna.fbcdn.net/v/t39.30808-1/370286420_719263263573586_5852064656480618895_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=F6w5RlMQ7IEAX872_JZ&_nc_ht=scontent.frec30-1.fna&oh=00_AfDYc7x2eUnGzDTuDUhNeS5P54YpL5smYb-ApQLN4VFr2A&oe=65BDC4A5',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: 'https://scontent.frec30-1.fna.fbcdn.net/v/t39.30808-1/370286420_719263263573586_5852064656480618895_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=F6w5RlMQ7IEAX872_JZ&_nc_ht=scontent.frec30-1.fna&oh=00_AfDYc7x2eUnGzDTuDUhNeS5P54YpL5smYb-ApQLN4VFr2A&oe=65BDC4A5',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: 'https://scontent.frec30-1.fna.fbcdn.net/v/t39.30808-1/370286420_719263263573586_5852064656480618895_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=F6w5RlMQ7IEAX872_JZ&_nc_ht=scontent.frec30-1.fna&oh=00_AfDYc7x2eUnGzDTuDUhNeS5P54YpL5smYb-ApQLN4VFr2A&oe=65BDC4A5',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: 'https://scontent.frec30-1.fna.fbcdn.net/v/t39.30808-1/370286420_719263263573586_5852064656480618895_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=F6w5RlMQ7IEAX872_JZ&_nc_ht=scontent.frec30-1.fna&oh=00_AfDYc7x2eUnGzDTuDUhNeS5P54YpL5smYb-ApQLN4VFr2A&oe=65BDC4A5',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: 'https://scontent.frec30-1.fna.fbcdn.net/v/t39.30808-1/370286420_719263263573586_5852064656480618895_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=F6w5RlMQ7IEAX872_JZ&_nc_ht=scontent.frec30-1.fna&oh=00_AfDYc7x2eUnGzDTuDUhNeS5P54YpL5smYb-ApQLN4VFr2A&oe=65BDC4A5',
  },
  // Favicons padrão para navegadores de desktop
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: 'https://scontent.frec30-1.fna.fbcdn.net/v/t39.30808-1/370286420_719263263573586_5852064656480618895_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=F6w5RlMQ7IEAX872_JZ&_nc_ht=scontent.frec30-1.fna&oh=00_AfDYc7x2eUnGzDTuDUhNeS5P54YpL5smYb-ApQLN4VFr2A&oe=65BDC4A5',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: 'https://scontent.frec30-1.fna.fbcdn.net/v/t39.30808-1/370286420_719263263573586_5852064656480618895_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=F6w5RlMQ7IEAX872_JZ&_nc_ht=scontent.frec30-1.fna&oh=00_AfDYc7x2eUnGzDTuDUhNeS5P54YpL5smYb-ApQLN4VFr2A&oe=65BDC4A5',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: 'https://scontent.frec30-1.fna.fbcdn.net/v/t39.30808-1/370286420_719263263573586_5852064656480618895_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=F6w5RlMQ7IEAX872_JZ&_nc_ht=scontent.frec30-1.fna&oh=00_AfDYc7x2eUnGzDTuDUhNeS5P54YpL5smYb-ApQLN4VFr2A&oe=65BDC4A5',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: 'https://scontent.frec30-1.fna.fbcdn.net/v/t39.30808-1/370286420_719263263573586_5852064656480618895_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=596444&_nc_ohc=F6w5RlMQ7IEAX872_JZ&_nc_ht=scontent.frec30-1.fna&oh=00_AfDYc7x2eUnGzDTuDUhNeS5P54YpL5smYb-ApQLN4VFr2A&oe=65BDC4A5',
  },
  // Android
  { rel: 'manifest', href: '/manifest.json' },
]

export function App() {
  return (
    <>
      <Favicons favicons={faviconsData} />
      <GlobalStyle />
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  )
}

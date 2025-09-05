import '../app/globals.css'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import GSAPAnimations from '../app/components/GSAPAnimations'
import PageTransition from '../app/components/PageTransition'
import Header from '../app/components/Header'
import Footer from '../app/components/Footer'

export default function App({ Component, pageProps }) {
  return (
    // <GSAPAnimations>
      <PageTransition>
        <div className="flex flex-col bg-white">
          <Header />
          <main className="mt-16 ">
            <Component {...pageProps} />
          </main>
        
          <Footer />
        </div>
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YL767Q27M6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-YL767Q27M6');`}
        </Script>
      </PageTransition>
    // {/* </GSAPAnimations> */}
  )
} 
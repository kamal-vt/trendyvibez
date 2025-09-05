import '../app/globals.css'
import { Analytics } from '@vercel/analytics/next'
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
      </PageTransition>
    // {/* </GSAPAnimations> */}
  )
} 
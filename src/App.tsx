import About from './components/About'
import BackgroundAnimations from './components/BackgroundAnimations'
import Contact from './components/Contact'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'
import TabAttentionHandler from './contexts/TabAttentionHandler'

function App() {
  return (
    <>
      <TabAttentionHandler originalTitle="Ron Jacob | Personal Portfolio">
        <Header />

        <main className="container">
          <Intro />
          <About />
          <Projects />
          <Experiences />
          <Contact />
        </main>

        <Footer />
      </TabAttentionHandler>

      <BackgroundAnimations />
    </>
  )
}
export default App

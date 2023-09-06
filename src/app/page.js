import Form from '@/components/Form'
import Header from '@/components/Header'
import Widget from '@/components/Widget'

export default function Home() {
  return (
    <div class="max-w-screen-lg font-nwg mx-auto min-h-screen shadow-[0_0_40px_rgba(0,0,0,0.2)]">
      <Header />
      <Widget />
      <Form />
    </div>
  )
}

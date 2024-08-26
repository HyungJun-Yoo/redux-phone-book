import './App.css'
import ContactForm from './component/ContactForm'
import ContactList from './component/ContactList'

function App() {
  return (
    <div className='flex flex-col bg-neutral-50 h-full min-h-screen'>
      <div className='flex justify-center'>
        <h1 className='text-[60px] mt-4 mb-10 font-bold w-full max-w-[1280px] text-center'>
          Phone Book
        </h1>
      </div>
      <div className='flex flex-col items-center sm:items-start sm:flex-row justify-around gap-8 p-8'>
        <div className='flex justify-center flex-grow'>
          <ContactForm />
        </div>
        <div className='flex justify-center border border-gray-700 p-8 w-[400px] lg:w-[700px] xl:w-[900px] 2xl:w-[1100px]'>
          <ContactList />
        </div>
      </div>
    </div>
  )
}

export default App

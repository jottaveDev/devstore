import { Metadata } from 'next'
import HomeView from './home.view'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  return <HomeView />
}

import { type Metadata } from 'next';
import HomeTemplate from '@/templates/home';

export const metadata: Metadata = {
  title: 'Felipe Bezerra',
  description: `bzr's portfolio`
};

export default function Home() {
  return <HomeTemplate />;
}

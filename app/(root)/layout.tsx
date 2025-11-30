import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import {auth} from '@/auth'

const Layout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const session = await auth();
    return (
        <main className="flex flex-col min-h-screen">
            <NavBar session={session}/>
            <div className="flex-grow">{children}</div>
            <Footer />
        </main>
    )
}

export default Layout;
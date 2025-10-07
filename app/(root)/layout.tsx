import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="flex flex-col min-h-screen">
            <NavBar />
                <div className="flex-grow">{children}</div>
            <Footer />
        </main>
    )
}
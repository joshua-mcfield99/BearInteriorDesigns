import Footer from './components/Footer'
import NavBar from './components/NavBar'
import CustomHead from './components/customHead'
import './globals.css'



export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <CustomHead />
            <body>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    )
}

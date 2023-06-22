import Provider from '@components/Provider'
import Nav from '@components/Nav'
import '@styles/globals.css'
export const metadata = {
    title: "Vendor Application",
    description: "Create, Edit, Delete and View Vendors"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Lekton:ital,wght@0,400;0,700;1,400&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

            </head>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient'></div>
                    </div>
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout
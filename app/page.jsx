import Feed from "@components/Feed"

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Create & View
                <br className="max-md:hidden"></br>
                <span className="orange_gradient text-center"> Vendors</span>
            </h1>
            <p className="desc text-center">
                VenApp is a tool for creating, editing, deleting and viewing vendors, and their details.
            </p>
            <Feed></Feed>

        </section>
    )
}

export default Home
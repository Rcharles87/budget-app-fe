import HomePageDetails from "../Components/HomePageDetails"

function HomePage() {
    return (
        <div>
            <h2>Welcome</h2>
            <h3>To the budget app!</h3>
            <div className="d-flex justify-content-center">

            <HomePageDetails />
            </div>
        </div>
    )
}

export default HomePage

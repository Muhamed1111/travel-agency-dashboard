import {Header} from "../../../components";

const aiTrips = () => {
    return (
       <main className="ai-trips wrapper">
           <Header
           title="Trips"
           description="View and edit AI-genereted travel plans"
           ctaText="Create Trip"
           ctaLink="/trips/create"
           />


       </main>
    )
}
export default aiTrips
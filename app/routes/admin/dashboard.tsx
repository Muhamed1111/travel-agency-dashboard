import React from 'react'
import {Header, StatesCard, TripCard} from "../../../components";
import {allTrips, dashboardStats, user} from "../../constants";

const Dashboard = () => {

    const {totalUsers, usersJoined, totalTrips, tripsCreated, userRole} = dashboardStats;

    return (
    <main className="dashboard wrapper">
        <Header

        title={`Welcome ${user?.name ?? 'Guest'}`}
        description="Track activity, trend and popular destinations in real time"
        />
        <section className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3
            gap-6 w-full">
                <StatesCard
                    headerTitle="Total Users"
                    total={totalUsers}
                    currentMonthCount={usersJoined.currentMonth}
                    lastMonthCount={usersJoined.lastMonth}/>
                <StatesCard
                    headerTitle="Total Trips"
                    total={totalTrips}
                    currentMonthCount={tripsCreated.currentMonth}
                    lastMonthCount={tripsCreated.lastMonth}/>
                <StatesCard
                    headerTitle="Total Users"
                    total={userRole.total}
                    currentMonthCount={userRole.currentMonth}
                    lastMonthCount={userRole.lastMonth}/>
            </div>
        </section>
        <section className="container">
            <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>

            <div className='trip-grid'>
                {allTrips.map((trip) => (
                    <TripCard
                        key={trip.id}
                        id={trip.id.toString()}
                        name={trip.name!}
                        imageUrl={trip.imageUrls[0]}
                        location={trip.itinerary?.[0]?.location ?? ''}
                        tags={[...trip.tags, trip.travelStyle!]}
                        price={trip.estimatedPrice!}
                    />
                ))}
            </div>
        </section>
    </main>
  )
}

export default Dashboard
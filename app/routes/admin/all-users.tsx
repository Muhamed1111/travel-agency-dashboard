import {Header} from "../../../components";
import React from "react";
import {ColumnDirective, ColumnsDirective, GridComponent} from "@syncfusion/ej2-react-grids";
import {cn} from "../../../components/NavItems";
import {getAllUsers} from "~/appwrite/auth";
import type {Route} from "./+types/all-users";

export const loader = async () => {
    const {users,total} = await getAllUsers(10,0);
    return {users,total};
}


const AllUsers = ({loaderData}: Route.ComponentProps) => {
    const {users} = loaderData;

    return(
        <main className="all-users wrapper">
            <Header
                title="Manage Users"
                description="Filter, sort, and access detailed user profiles"
            />
            All users page content

            <GridComponent dataSource={users} gridLines="None">
              <ColumnsDirective>
                  <ColumnDirective
                  field="name"
                  headerText="Name"
                  width="200"
                  textAlign="Left"
                  template={(props:UserData)=> (
                      <div className="flex item-center gap-1.5 px-4">
                          <img src={props.imageUrl} alt="user" className="rounded-full size-8
                          aspect-square" />
                          <span className="text-base font-medium">{props.name}</span>
                      </div>
                  )}
                  />
                  <ColumnDirective
                  field="email"
                  headerText="Email"
                  width="250"
                  textAlign="Left"
                  />
                  <ColumnDirective
                  field="joinedAt"
                  headerText="Date Joined"
                  width="120"
                  textAlign="Left"

                  />
                  <ColumnDirective
                  field="status"
                  headerText="Type"
                  width="120"
                  textAlign="Left"
                  template={(props :UserData)=> (
                      <article className={cn('status-column',props.status === 'user' ? 'bg-success-50' : 'bg-light-300' )}>
                          <div>
                            <h3 className="text-base font-medium">{props.status}</h3>
                          </div>
                      </article>

                  )}
                  />
                  <ColumnDirective
                  field="itineraryCreated"
                  headerText="Trips Created"
                  width="120"
                  textAlign="Left"
                  />

              </ColumnsDirective>
            </GridComponent>

        </main>
    )

}
export default AllUsers
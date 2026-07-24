import React from "react";
import CohortDetails from "./CohortDetails";

function App() {

    const cohorts = [

        {
            name: "INTADMDF10 - .NET FSD",
            startDate: "22-Feb-2022",
            status: "ongoing",
            coach: "John",
            trainer: "David"
        },

        {
            name: "ADM21JF014 - Java FSD",
            startDate: "10-Jan-2022",
            status: "completed",
            coach: "Peter",
            trainer: "Smith"
        },

        {
            name: "INTADMDF09 - Java FSD",
            startDate: "15-Mar-2022",
            status: "ongoing",
            coach: "Alice",
            trainer: "Kevin"
        }

    ];

    return (

        <div style={{ padding: "20px" }}>

            <h1>Cohort Dashboard</h1>

            {
                cohorts.map((cohort, index) => ( 

                    <CohortDetails
                        key={index}
                        cohort={cohort}
                    />

                ))
            }

        </div>

    );

}

export default App;
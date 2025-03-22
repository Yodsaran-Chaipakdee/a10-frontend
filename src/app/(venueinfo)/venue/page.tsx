import CardPanel from "@/components/CardPanel"
import VenueCatalog from "@/components/VenueCatalog"
import getVenues from "@/libs/getVenues"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
export default  function Card(){
const cards =  getVenues()

    return(
        <main className="text-center p-5">
         <h1 className="text-xl font-medium">Hellooooooooooooooooooo</h1>
         <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
         <VenueCatalog venuesJson={cards}/>
         </Suspense>


        </main>
    )
}
import { Fragment } from "react"
import { useParams } from "react-router-dom"

const EventDetailPage = () => {
    const params = useParams()
    return (
        <Fragment>
            <h1>EventDetailPage</h1>
            <p>{params.eventid}</p>
        </Fragment>
    )
}

export default EventDetailPage
import React from 'react'
import GridLoader from 'react-spinners/GridLoader'

export default props => {
    return (
        <React.Fragment>
            <div className="row divLoadingSpinner">
                <div className="col-12 ">
                    <GridLoader color="#32cdc4" />
                </div>
            </div>
        </React.Fragment>
    )
}

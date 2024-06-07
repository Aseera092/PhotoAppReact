import React from 'react'
import Navbar from './Navbar'

const Gallery = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row g-3">

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <label htmlFor="" className="form-label">Photo Name</label>
                        <input type="Photo Name" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <label htmlFor="" className="form-label">Photo ID</label>
                        <input type="Photo ID" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <label htmlFor="" className="form-label">Quality</label>
                        <select name="" id="" className="form-control">
                            <option value="High">High</option>
                            <option value="Medium">Medum</option>
                            <option value="Low">Low</option>

                        </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Person Name</label>
                        <input type="Person Name" className="form-control" />
                    </div>
                   
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Description</label>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <label htmlFor="" className="form-label">Theme</label>
                        <input type="Theme" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <label htmlFor="" className="form-label"> Date</label>
                        <input type="date" name="" id="" className="form-control" />
                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Gallery
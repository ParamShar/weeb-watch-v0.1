import React from 'react';

export default function MidSection() {
    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="container border-top">
                    <div className="row py-4">
                        <div className="col-lg-6">
                            {/* The logo comes here */}
                            <div className='py-5'>
                            <h2 className='text-white'>Logo</h2>
                            </div>
                            <form>
                                <div className="row pt-4">
                                    <div className="col-10"><input type="text" className="form-control" placeholder='search anime' /></div>
                                    <div className="col-2"><button className="form-control">search</button></div>
                                </div>
                            </form>
                            <p className='pt-4 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis neque laboriosam laudantium suscipit eos. Inventore assumenda praesentium officiis ipsa cumque recusandae id aperiam debitis, fuga blanditiis nisi quo! Amet, minima architecto accusamus culpa quia perspiciatis alias ducimus ullam beatae laboriosam!</p>
                        </div>


                        {/* the trending playlist will come here */}
                        <div className="col-lg-6 bg-danger"></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-warning landing-page-banner"></div> {/* space for banner  */}
        </>
    )
}
import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';

interface ComponentProps { }

const Error503: FC<ComponentProps> = () => {
    return (
        <Fragment>
            <div className="page-content error-page error2 tx-fixed-white">
                <div className="container text-center">
                    <div className="error-template">
                        <h1 className="display-1 mb-2">5<span className="custom-emoji"><svg xmlns="http://www.w3.org/2000/svg" height="140" width="140" data-name="Layer 1" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#ffffff" /><path fill="#00a5a2" d="M12 17.0918a5.68094 5.68094 0 0 1-3.64258-1.3252 1.00029 1.00029 0 1 1 1.28516-1.5332 3.76085 3.76085 0 0 0 4.71484 0 1.00029 1.00029 0 0 1 1.28516 1.5332A5.68094 5.68094 0 0 1 12 17.0918zM16.91406 10.83594a.99676.99676 0 0 1-.707-.293 1.03323 1.03323 0 0 0-1.41406 0 .99989.99989 0 0 1-1.41406-1.41406 3.07249 3.07249 0 0 1 4.24218 0 1 1 0 0 1-.707 1.707z" /><circle cx="9" cy="10" r="1" fill="#00a5a2" /></svg></span>3</h1>
                        <h5 className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </h5>
                        <div className="text-center">
                            <Link className="btn btn-secondary mt-5" to={`${import.meta.env.BASE_URL}Dashboard/IndexPage/`}> <i className="fa fa-long-arrow-left"></i> Back to Home </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Error503;
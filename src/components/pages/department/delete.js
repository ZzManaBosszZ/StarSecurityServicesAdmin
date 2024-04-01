import Layout from "../../layouts";

function DepartmentDelete() {
    return ( 
        <Layout>
             <div className="card-body">
                            <div className="table-responsive">
                                <div className="text-end"></div>
                                <table className="table table-sm mb-0">
                                    <thead>
                                        <tr>
                                            <th>
                                                <strong>Thumbnail</strong>
                                            </th>
                                            <th>
                                                <strong>Movie Name</strong>
                                            </th>
                                            <th>
                                                <strong>Director</strong>
                                            </th>
                                            <th>
                                                <strong>Release Date</strong>
                                            </th>
                                            <th>
                                                <strong>Movie Duration</strong>
                                            </th>
                                            <th>
                                                <strong>Genres</strong>
                                            </th>
                                            <th>
                                                <strong>Action</strong>
                                            </th>
                                        </tr>
                                    </thead>
                                    {/* <tbody id="orders">
                                        {currentMovies.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <img src={item.movie_image} className="rounded-lg me-2 movie-thumb" alt="" />
                                                    </td>
                                                    <td>{item.title}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="w-space-no">{item.director}</span>
                                                        </div>
                                                    </td>
                                                    <td>{format(new Date(item.release_date), "yyyy-MM-dd")}</td>
                                                    <td>{item.duration} (Minutes)</td>
                                                    <td>
                                                        <span key={item.genres[0].id} className="badge light badge-dark">
                                                            {item.genres[0].name}
                                                        </span>
                                                        {item.genres.length > 1 && <span className="badge light badge-dark">+{item.genres.length - 1}</span>}
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <NavLink onClick={() => handleRestoreMovie(item.id)} className="btn btn-success shadow btn-xs">
                                                                <svg width="25" height="25" viewBox="0 0 60 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M41.4025 26.4414C41.9767 25.8671 42.258 25.1171 42.258 24.3671C42.258 23.6171 41.9767 22.8671 41.4025 22.2929L34.0314 14.9218C32.9533 13.8437 31.5236 13.2578 30.0119 13.2578C28.5002 13.2578 27.0587 13.8554 25.9923 14.9218L18.6212 22.2929C17.4728 23.4414 17.4728 25.2929 18.6212 26.4414C19.7697 27.5898 21.6212 27.5898 22.7697 26.4414L27.0939 22.1171L27.0939 38.7695C27.0939 40.3867 28.4064 41.6992 30.0236 41.6992C31.6408 41.6992 32.9533 40.3867 32.9533 38.7695L32.9533 22.1054L37.2775 26.4296C38.4025 27.5781 40.2541 27.5781 41.4025 26.4414Z"
                                                                        fill="#FFFFFF"
                                                                    ></path>
                                                                </svg>
                                                            </NavLink>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody> */}
                                </table>
                            </div>
                        </div>
                        
        </Layout>
     );
}

export default DepartmentDelete;
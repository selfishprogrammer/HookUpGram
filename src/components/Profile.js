import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

export default function Profile() {
    return (
        <div>
            <div className="container my-4">
                <div className="col-md-6 offset-md-3">
                    <div className="my-4" style={{ display: "flex", justifyContent: "space-around" }}>

                        <img style={{ cursor: "pointer" }} className="rounded-circle border p-1" src="http://www.radiogramadonews.com.br/wp-content/uploads/2020/06/logo-instagram-png-sem-fundo16.png" width="150" height="150" alt="" srcset="" />
                        <div>
                            <div className="" style={{ display: "flex", justifyContent: "space-around" }}>
                                <div className="ml-4 mr-3" style={{ fontSize: "30px", fontFamily: "math" }}>

                                    codegeeks

                                </div>
                                <div className="row">
                                    <div>
                                        <button className="btn btn-default border ml-3 mr-1" style={{ borderRadius: "5px", width: "8rem" }}>Edit Profile</button>

                                    </div>
                                    <div className="mx-1" style={{ fontSize: "20px" }}><SettingsIcon /></div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between my-1">
                                <div className="ml-4"><b>4 </b>posts</div>
                                <div className="ml-4"><b>69 </b>followers</div>
                                <div className="ml-4"><b>7 </b>following</div>



                            </div>

                            <div className=" ml-4 mt-4 mb-1"><b>Code Geeks</b></div>
                            <div className="ml-4">Youtuber & Cofounder</div>
                            <div className="ml-4">Software Engineer
                            </div>

                            <div className="ml-4">Freelancer(Creates Websites and Apps)</div>
                            <div className="ml-4">Freelancer(Creates Websites and Apps)</div>

                            <div className="ml-4">Coder (MERN STACK)</div>
                            <div><Link to="https://github.com/selfishprogrammer" className="ml-4">https://github.com/selfishprogrammer</Link></div>



                        </div>
                    </div>
                    <div className="mt-5" style={{ overflowX: "auto" }}>
                        <div className="d-flex justify-content-between" >

                            <div className="my-1 mx-1">
                                <img style={{ cursor: "pointer" }} className="rounded-circle border p-1 bg-danger" src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg" width="75" height="75" alt="" srcset="" /><br />
                                <p className="my-1">Fighting Back</p>
                            </div>
                            <div className="my-1 mx-1">
                                <img style={{ cursor: "pointer" }} className="rounded-circle border p-1 bg-danger" src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg" width="75" height="75" alt="" srcset="" /><br />
                                <p className="my-1">Fighting Back</p>
                            </div>
                            <div className="my-1 mx-1">
                                <img style={{ cursor: "pointer" }} className="rounded-circle border p-1 bg-danger" src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg" width="75" height="75" alt="" srcset="" /><br />
                                <p className="my-1">Fighting Back</p>
                            </div>

                            <div className="my-1 mx-1">
                                <img style={{ cursor: "pointer" }} className="rounded-circle border p-1 bg-danger" src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg" width="75" height="75" alt="" srcset="" /><br />
                                <p className="my-1">Fighting Back</p>
                            </div>
                        </div>
                    </div>
                
           

                    <hr />
                    <div className="d-flex justify-content-center" >

                        <div className="d-flex justify-content-between" >
                            <button className="btn btn-default mx-2" style={{ opacity: "0.5" , height:"35px" }}><PostAddRoundedIcon /> POSTS</button>
                            <button className="btn btn-default mx-2" style={{ opacity: "0.5" , height:"35px" }}><LocalOfferRoundedIcon /> SAVED</button>
                            <button className="btn btn-default mx-2" style={{ opacity: "0.5" , height:"35px" }}><TurnedInNotIcon /> TAGGED</button>
                        </div>
                    </div>
                    
                   
                </div>
                <div className="container">
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                        <div className="">        <img className="ml-1 mr-1 my-2" style={{cursor:"pointer"}} src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg" width="250" height="250" alt="" srcset="" />
                        </div>
                        <div className="">        <img className="ml-1 mr-1 my-2" style={{cursor:"pointer"}} src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg" width="250" height="250" alt="" srcset="" />
                        </div>
                        <div className="">        <img className="ml-1 mr-1 my-2" style={{cursor:"pointer"}} src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg" width="250" height="250" alt="" srcset="" />
                        </div>
                        <div className="">        <img className="ml-1 mr-1 my-2" style={{cursor:"pointer"}} src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg" width="250" height="250" alt="" srcset="" />
                        </div><div className="">        <img className="ml-1 mr-1 my-2" style={{cursor:"pointer"}} src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg" width="250" height="250" alt="" srcset="" />
                        </div>
                        <div className="">        <img className="ml-1 mr-1 my-2" style={{cursor:"pointer"}} src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg" width="250" height="250" alt="" srcset="" />
                        </div><div className="">        <img className="" src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg" width="250" height="250" alt="" srcset="" />
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

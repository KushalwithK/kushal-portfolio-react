import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import CleverStudio from '../../assets/clever_studio.png'
// import CheminEsports from '../../assets/chemin_esports.png'
import { BsArrowDownRight, BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { AiOutlineExclamation } from 'react-icons/ai'
import RouteTransition from '../subComponents/RouteTransition';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { apiSingleton, baseUrl, images, projects } from '../services/Provider';
import AboveFooter from '../subComponents/AboveFooter';
import Footer from '../Footer/Footer';

const Project = ({ setViewProject }) => {
    const swiper = useRef();
    const { projectName } = useParams();
    const [project, setProject] = useState([])

    useEffect(() => {
        apiSingleton.get(projects, {
            params: {
                url: projectName
            }
        }).then((response) => {
            setProject(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    const handleSliderLeft = () => {
        swiper.current.swiper.slidePrev();
    }

    const handleSliderRight = () => {
        swiper.current.swiper.slideNext();
    }

    return (
        <RouteTransition>
            {project.length > 0 &&
                <>
                    <SingleProject data-scroll-section>
                        <Title>
                            <div className='title'>
                                <span>{project[0].title}</span>
                                <p>home / projects / {project[0].url}</p>
                            </div>
                            <a className='visit' href='https://cheminesports.com'>
                                <BsArrowDownRight size={27} color='black' />
                            </a>
                        </Title>
                        <Images>
                            <button className='left-button' onClick={handleSliderLeft}>
                                <BsArrowLeft color='#cecece' />
                            </button>
                            <button className='right-button' onClick={handleSliderRight}>
                                <BsArrowRight color='#cecece' />
                            </button>
                            <Swiper ref={swiper} spaceBetween={20} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 1.3 } }} translate='yes' >
                                {project[0].images.map((image) => {
                                    return <SwiperSlide>
                                        <img src={baseUrl + images + image.name} alt="" />
                                    </SwiperSlide>
                                })}
                            </Swiper>
                        </Images>
                        <Info>
                            <div className='outer'>
                                <span>01</span>
                                <div>
                                    <p className='title'>Timeline</p>
                                    <p className='info'>{project[0].startDate + " - " + project[0].endDate}</p>
                                </div>
                            </div>
                            <div className="seperator"></div>
                            <div className='outer'>
                                <span>02</span>
                                <div>
                                    <p className='title'>Service</p>
                                    <p className='info'>Web Development</p>
                                </div>
                            </div>
                            <div className="seperator"></div>
                            <div className='outer'>
                                <span>03</span>
                                <div>
                                    <p className='title'>Client</p>
                                    <p className='info'>{project[0].client}</p>
                                </div>
                            </div>
                            <div className="seperator"></div>
                            <div className='outer'>
                                <span>04</span>
                                <div>
                                    <p className='title'>Socials</p>
                                    <p className='info'>Socials of client</p>
                                </div>
                            </div>
                        </Info>
                    </SingleProject>
                    <AboveFooter />
                    <Footer setViewProject={setViewProject} />
                </>
            }
            {project.length == 0 &&
                <NotFound>
                    <div>
                        <AiOutlineExclamation />
                        <div>
                            <span>The project doesn't exist!</span>
                            <p>This project may be shifted to other path or doesn't exits, try checking the path or try after some time.</p>
                        </div>
                    </div>
                </NotFound>
            }
        </RouteTransition >
    )
}

const SingleProject = styled.div`
padding: 11rem 6rem 0 6rem;
`

const NotFound = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding: 0 6rem;

div {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        font-size: 8rem;
    }

    div {
        flex-direction: column;
        align-items: flex-start;
        gap: .5rem;
        span {
            font-size: 4rem;
            font-family: "gilroy regular";
        }
        p {
            font-family: "gilroy light";
        }
    }
}

`

const Title = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
    .title {
        span {
            font-size: 6rem;
            font-family: "Made Bon Voyage Regular";
        }
        p {
            font-family: "gilroy thin";
        }
    }
    .visit {
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        transition: transform .2s ease;

        svg {
            transform: rotate(270deg);
        }
        &:hover {
            transform: scale(1.2);
        }
    }
`

const Images = styled.section`
padding: 4rem 0 3rem 0;
position: relative;
button {
    height: 4rem;
    width: 4rem;
    background: #222222;
    z-index: 99;
    border: none;
    box-shadow: none;
    border-radius: 50%;
    transition: transform .2s ease;

    svg {
        font-size: 1.5rem;
    }

    &:hover {
        transform: scale(1.2);
    }
}
img {
    border-radius: 0.6rem;
    width: 100%;
}

.left-button  {
    position: absolute;
    top: 50%;
    left: -2rem;
}

.right-button {
    position: absolute;
    top: 50%;
    right: -2rem;
}
`

const Info = styled.section`
display: flex;
justify-content: space-between;
    .outer {
        display: flex;
        align-items: center;
        gap: 2rem;
        span {
            font-size: 3rem;
            font-family: "gilroy light";
            color: #6b6b6b;
        }
        div {
            display: flex;
            flex-direction: column;
        p {
            font-size: 1.5rem;
        }
        
        .title {
            font-family: "gilroy regular";
            /* font-size: 2rem; */
        }
        .info {
            font-family: "gilroy thin";
            margin-top: 0.5rem;
        }
    }
    }

    .seperator {
        padding: 0 1px 0 0;
        margin: 1rem 0;
        background-color: #ffffff24;
    }
`

export default Project
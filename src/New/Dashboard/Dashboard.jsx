import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
const Dashboard = () => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [target, setTarget] = useState("");
     
    const [carImage, setCarouselImage] = useState("");
    const [carTitle, setCarouselTitle]= useState("");
    const [carDesc, setCarouselDesc] = useState("");

    const [cardImage, setCardImage] = useState("");
    const [cardTitle, setCardTitle] = useState("");
    const [cardDesc, setCardDesc] = useState("");

    const [footerImage, setFooterImage] = useState("");
    const [footerTitle, setFooterTitle] = useState("");
    const [footerDesc, setFooterDesc] = useState("");

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch({ type:"ADD_LINK", data: { name, link, target } })
    };
    const handleDispatch = () => {
        dispatch({
            type: "ADD_CAROUSEL",
            payload: {
                carImage,
                carTitle,
                carDesc
            },
        });
    };
    const handleCourses = () => {
        dispatch({
            type: "ADD_COURSES",
            meriMarzi: {
                cardImage,
                cardTitle,
                cardDesc
            },
        });
    };
    const handleFooter = () => {
        dispatch({
            type: "ADD_FOOTER_CARD",
            paylaod: {
                footerImage,
                footerTitle,
                footerDesc
            },
        });
    };
    return (
        <div>
            <input
                type="text"
                placeholder='link name'
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder='link address'
                onChange={(e) => setLink(e.target.value)}
            />
            <input
                type="text"
                placeholder='link target'
                onChange={(e) => setTarget(e.target.value)}
            />
            <button onClick={handleClick}>Dispatch Link</button>
            <br />
            <hr />
            <input
                type="text"
                placeholder="carousel image"
                onChange={(event) => setCarouselImage(event.target.value)}
            />
            <input
                type="text"
                placeholder="carousel title"
                onChange={(s) => setCarouselTitle(s.target.value)}
            />
            <input
                type="text"
                placeholder="carousel desc"
                onChange={(sameer) => setCarouselDesc(sameer.target.value)}
            />
            <button onClick={handleDispatch}>Dispatch Carousel</button>
            <br />
            <hr />
            <input
                type="text"
                placeholder='course image'
                onChange={(e) => setCardImage(e.target.value)}
            />
            <input
                type="text"
                placeholder='course title'
                onChange={(e) => setCardTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder='course desc'
                onChange={(e) => setCardDesc(e.target.value)}
            />
            <button onClick={handleCourses}>Dispatch Courses</button>
            <br />
            <hr />
            <input
                type="text"
                placeholder='fcardImage'
                onChange={(e) => setFooterImage(e.target.value)}
            />
            <input
                type="text"
                placeholder='fcardTitle'
                onChange={(e) => setFooterTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder='fcardDesc'
                onChange={(e) => setFooterDesc(e.target.value)}
            />
            <button onClick={handleFooter}>Dispatch Footer Card</button>
        </div>
    );
};

export default Dashboard;
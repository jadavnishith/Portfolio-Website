import Col from "react-bootstrap/esm/Col"


export const ProjectCard = ({title,description,imgUrl,gitHubUrl}) => {
    return(
        <Col sm={6} md={4} >
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span><br />
                    <span>{gitHubUrl}</span>
                </div>
            </div>
        </Col>
    )
}
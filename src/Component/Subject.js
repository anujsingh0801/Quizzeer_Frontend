import  React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate  } from "react-router-dom";

const Subject = ({subName}) => {

  const navigate = useNavigate ();


  const startTest = () => {
    navigate('/startTest', { state: { data: subName } });
  }

  return(
      <div>
      <Card style={ {background:"#D3D3D3",  marginTop:0} }>
        <CardBody>
          <CardTitle className='fw-bold' >{subName}</CardTitle>
          {/* <CardSubtitle></CardSubtitle> */}
          <CardText>Test your {subName} Skills</CardText>
          <Button color="info" outline onClick={startTest}>Start</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Subject;
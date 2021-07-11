import { Card, CardTitle, CardBody} from '@patternfly/react-core';
import '../styles/card.css';

 const SchoolCard = (props) => (
  <Card className='schoolData'>
    <CardTitle>{props.name}</CardTitle>
    <CardBody>website: <a href="https://www.wisc.edu" target="_blank" rel="noreferrer">{props.web}</a>
    <p>Location: {props.city}, {props.state} {props.zip}</p>
    <p>Student Population: {props.pop}</p>
    </CardBody>
    
  </Card>
)
export default SchoolCard;
// import Card from 'react-bootstrap/Card';
import React from "react";
// import Button from 'react-bootstrap/Button';


function CharacterDisplay(props) {
  const { characters } = props;
  console.log(props);
  const newSet = characters.map((ele) => {
    return (
        <>
        <div class="d-inline-flex flex-row p-2 justify-content-around align-items-center flex-wrap">
            {ele.name}
            <img src={ele.imageUrl} width="100" height="100" alt={ele.name} />
            </div>
    {/* <Card style={{ width: '18rem' }}>
      <Card.Img src={ele.imageUrl} />
      <Card.Body>
        <Card.Title>{ele.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
   </>
    )

    });
  

  return (
    
    <div >
      <div>{newSet}</div>
    </div>
  );
  

}
export default CharacterDisplay;

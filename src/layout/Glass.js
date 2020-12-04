import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import {Col, Container, Row} from 'reactstrap';
import {Card} from 'react-bootstrap';
import {properties} from "../properties";

const Image = styled.img`
  position: relative; 
  align-content: center;
  width: 214px;
  height: 214px;
`

const TextBlock = styled.div`
  color: #0a0a4c;
  margin: 100px;
  padding: 20px;
  background-color: #fff4e3;
  border: #c6c1c1 solid 1px;
 
`

const GlassDescription = styled.div`
  background-color: #fff4e3;
  text-align: center;
  border: #c6c1c1 solid 1px;
`

const Layout = styled.div`
margin: 20px;
`


function Glass(props) {

    const [glassList, setGlassList] = useState([]);

    let glassDescription = {
        "Goblet" : "The goblet glass has a large, head-retaining round bowl and a thick stem. Chalices are similar, but tend to have thicker bowl walls. Both types can be highly decorative and sometimes feature intricate etching or precious metal inlaying. Their wide mouth design promotes big, hearty sips.",
        "Pilsner": "Tall, slim, and slightly wider at the mouth, a pilsner glass makes visible the sparkle, clarity, and bubbles of pilsners and other lighter beers. At the same time, it helps retain a beer’s head, which keeps volatile aromatics locked under your nose. Typically, pilsner glasses hold less beer than a pint glass--usually somewhere in the vicinity of 12 to 14 ounces.",
        "Mug": "Beer mugs come in a variety of shapes and sizes. Some are even dimpled. What holds true for all beer mugs, however, is the handle projecting from one side. It’s a design feature that, like a stem, helps prevent heat transference from your hand to the beer. Beer mugs also tend to have relatively thick glass walls for durability and insulation. They are classic pub glassware.",
        "Tulip": "With a bulbous body and a flared lip, the tulip glass is designed to capture the head and promote the aroma and flavor of Belgian ales and other malty, hoppy beers. Its short stem facilitates swirling, further enhancing your sensory experience.",
        "Weizen": "The weizen glass features thin walls and a lot of length to showcase the color of wheat beers. The design also locks in the style’s signature banana and clove aromas and provides proper space for a thick, fluffy head. They are sometimes confused with pilsner glasses, but there are important distinctions. A weizen glass typically holds a ⅕ liter of beer (compared to a pilsner’s 12 to 14 ounces), and it boasts some attractive curvature.",
        "Flute": "a relatively small glass that has a conical shape, narrow at the bottom and opening up a bit at the top, showing off a lager’s clear, sparkling straw-gold color and allowing for a fluffy head",
        "Pint": "The simple, utilitarian 16-ounce American pint glass is slightly wider at the mouth than at the base. You’ll find it in large numbers in bars and restaurants across the United States, where it is used to serve a wide range of beer styles. Its ubiquity owes to the fact that it is relatively inexpensive to manufacture and easy to clean and store.",
        "Snifter": "For big beers like barleywines, old English-style ales, and imperial stouts, meet the snifter.  For the same reason it’s great for sipping spirits, the snifter is ideal for boozy, barrel-aged, or otherwise strong, malty-heavy brews that tend to pack a lot of alcohol heat, complex layers of malt flavor, and, in some cases, adjuncts to unpack (vanilla, cocoa, etc.). The short stem gives its holder a decent grip while allowing the fingers to touch the glass, helping to warm the beer and better deliver its aromas (in the case of big beers, a little warmth is good, helping to release aromas from the dense, heavy liquid)."

    }

    useEffect(() => {
        axios.get(`https://sandbox-api.brewerydb.com/v2/menu/glassware?key=${properties.key}`)
            .then(res => setGlassList(res.data.data))
    }, [])

    return (
        <>

                <TextBlock>
                    When it comes to beer, not all glassware is created equal. Sure, you could pour your favorite ale into whatever container you have lying around and successfully deliver beer to your mouth. But there is a reason why particular styles of beer are traditionally served in specific types of beer glasses. It isn't just for looks (although looks certainly play a role.) Rather, the different shapes and styles of beer glassware on the market were, in many cases, designed to make more pronounced or otherwise enhance the aromatic compounds inherent to different kinds of beer. And as we all know, smell has a huge impact on how we perceive flavor. Ergo, the right beer glass can take your beer-drinking experience to new heights.<br/>
                    Below are some common types of beer glasses along with information on which beer styles they best complement.
                </TextBlock>


        <Layout>
            <Container>
                <Row>
            {glassList.map((glass) => {
                return <Col xs="3" key={glass.id}>
                            <Card style={{ width: '18rem', margin: '20px', padding: '20px' }}>
                                <Image src={`images/${glass.id}.jpg`} />
                                    <Card.Body>
                                        <Card.Title style={{textAlign: 'center'}}>{glass.name}</Card.Title>
                                        <GlassDescription>
                                            <Card.Text>to add text</Card.Text>
                                        </GlassDescription>
                                    </Card.Body>
                            </Card>
                    </Col>
                })}
                </Row>
            </Container>
        </Layout>
    </>
    );
}

export default Glass;
import { Container, Col, Row, Image } from "react-bootstrap"
import data from "../data.json"

export default function Orders(props) {
    return (
        <Container>
            <h3 className="mt-5 mb-5">My Orders</h3>
            <Container className="p-4 mb-5" style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
                <Col>
                {
                    props.orders.length<=0 && <p className="text-center">Nothing to show here. You are missing amazing offers.</p>
                }
                    {
                        props.orders && props.orders.map(element => {
                            let product = data.products.find(e => e.id===parseInt(element.product_id))

                            return (
                                <Row className="pt-4 pb-3 border-bottom">
                                    <Col lg={1}>
                                        <Image style={{width: 80, height: 100}} src={product?.image} />
                                    </Col>
                                    <Col lg={2}>
                                        <p>{product?.label}</p>
                                        <p style={{fontSize: 12, marginTop: -18}}>Rs. {(parseInt(element.quantity)*parseInt(product.final_price))+((parseInt(element.quantity)*parseInt(product.final_price))*0.18)}</p>
                                        <p style={{fontSize: 12, marginTop: -4}}><span>quantity: </span>{element.quantity}</p>
                                    </Col>
                                    <Col className="ml-20" lg={3}>
                                        <p>Tracking Id: </p>
                                        <p style={{fontSize: 14, marginTop: -16}}>{element.order_id}</p>
                                    </Col>
                                    <Col lg={3}>
                                        <p>Estimated Delivery Date: </p>
                                        <p style={{fontSize: 14, marginTop: -16}}>{element.delivery_date}</p>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </Col>
            </Container>
        </Container>
    )
}
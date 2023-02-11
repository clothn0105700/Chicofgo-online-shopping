import { React, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap/'

function RatingButton(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [ratingInfo, setRatingInfo] = useState({
        message_rating: '',
        speak: '',
        message_with_products_id: props.product_id,
        member_id: props.member_id
    })

    function handleChange(e) {
        let newRatingInfo = { ...ratingInfo };
        newRatingInfo[e.target.name] = e.target.value;
        setRatingInfo(newRatingInfo);
    }

    function handleMessage() {
        console.log(ratingInfo)
    }

    return (<>
        <Button
            variant="chicofgo-brown"
            className={`my-1 py-1 chicofgo_white_font`}
            onClick={handleShow}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
            >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            評價
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>評價</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>滿意度</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            size="sm"
                            name="message_rating"
                            onChange={handleChange}
                        >
                            <option>請選擇</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>回覆</Form.Label>
                        <Form.Control as="textarea" name="speak" onChange={handleChange} rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="chicofgo-brown" className='chicofgo_white_font' onClick={handleMessage}>
                    送出
                </Button>
            </Modal.Footer>
        </Modal>
    </>)
}

export default RatingButton
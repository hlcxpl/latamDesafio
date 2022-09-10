import React from 'react'
import Badge from 'react-bootstrap/Badge';

function Footer(props) {
    return (
        <div className='d-flex justify-content-center py-5'>
            <div className='row'>
                <div className='col-md-4'>
                    <h1>Descripcion</h1>
                    <p>{props.description}</p>
                </div >
                <div className='col-md-4'>
                    <Badge pill bg="primary">
                       facebook de  Gatos
                    </Badge>{' '}
                    <Badge pill bg="secondary">
                        Github de Gatos
                    </Badge>{' '}
                    <Badge pill bg="success">
                        WhatsApp de Gatos
                    </Badge>{' '}
                </div>
                <div className='col-md-4'>
                    <a className='text-light' href="https://placekitten.com/">placekitten.com</a>

                </div>

            </div>
        </div>
    )
}

export default Footer
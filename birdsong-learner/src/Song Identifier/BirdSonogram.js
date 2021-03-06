import React from 'react';
import ReactDOM from 'react-dom';

class BirdSonogram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bird: this.props.bird,
        };
    }

    render() {
        let url = this.state.bird.sono.full.replace('//www.xeno-canto.org/','')
        return(
            <>
                <img src={url} />
            </>
        )
    }
}

export default BirdSonogram
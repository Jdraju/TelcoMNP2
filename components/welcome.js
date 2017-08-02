import React, {Component} from 'react';
import { css } from 'aphrodite'
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';


class Welcome extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
    }

    render() {
        return(
      <ExpansionList style={{ width: '98%'}}>
        <ExpansionPanel label="Intro" defaultExpanded>
            <div>
                <h3>Welcome to the MNP with Blockchain Demo: </h3>
                <div>
                    This demo showcases the use of Blockchain within the Mobile Number Portability process.
                </div>
            </div>
        </ExpansionPanel>
      </ExpansionList>

        );
    }

}

export default Welcome;
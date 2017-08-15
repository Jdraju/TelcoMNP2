import React, {Component} from 'react';
import ReactTable from 'react-table'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { css } from 'aphrodite'
import { styles } from './styles.css'


class graphs extends Component{


    render() {
        return(
            <div width = '100%'>
                <div className={css(styles.inboundIMG)}>

                </div>    
                <div className={css(styles.statsCircle)}>
                
                    TEST2
                </div>
                <div className={css(styles.compareTab)}>
                    TEST3
                </div>

            </div>     
            

        );
    }

}

export default graphs;
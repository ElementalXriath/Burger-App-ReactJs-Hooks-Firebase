import React from 'react';
import Aux from '../../high-order-comp/Aux';
import './Layout.css';
const layout = ( props ) => (

        <Aux>
            <div>
                Toolbar, Drawer, BackDrop
            </div>
            <main className="Content">
                {props.children}
            </main>
        </Aux>


);

export default layout;
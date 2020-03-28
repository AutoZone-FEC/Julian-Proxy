import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../src/components/Nav';
import Ad from '../src/components/Ad';
import Bar from '../src/components/Bar';
import Fast from '../src/components/Fast';
import Main from '../src/components/Main';
import Related from '../src/components/Related';
import Tabs from '../src/components/Tabs';
import CoreParts from '../src/components/CoreParts';
import Bottom from '../src/components/Bottom';

ReactDOM.render(<Ad />, document.getElementById('ad'))
ReactDOM.render(<Bar />, document.getElementById('bar'))
ReactDOM.render(<Fast />, document.getElementById('fast'))
ReactDOM.render(<Main />, document.getElementById('main'))
ReactDOM.render(<Related />, document.getElementById('relatedshell'))
ReactDOM.render(<CoreParts />, document.getElementById('core'))
ReactDOM.render(<Bottom />, document.getElementById('bottom'))

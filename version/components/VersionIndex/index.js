import React from 'react';
import Navbar from '../Navbar';
import QRCode from 'qrcode.react';
import {
  DropdownButton,
  ProgressBar,
  MenuItem,
  Glyphicon,
  ListGroup,
  ListGroupItem,
  Input,
  ButtonToolbar,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Table,
  Modal,
} from 'react-bootstrap/lib';
import Note, {Nc} from '../Note';

const applIco = <i style={{color: '#A6B1B7', fontSize: '1.5em'}} className="fa fa-apple"></i>;
const andrIcon = <i style={{color: '#97C024', fontSize: '1.5em'}} className="fa fa-android"></i>;

const signingIos = (disabled) => {
  return (
  <div>
  <Input
    type="file"
    label="Provisioning Profile"
    help={<a href="">Read more</a>}
    labelClassName="col-xs-3"
    wrapperClassName="col-xs-5"
    disabled={disabled}
  />
  <Input
    type="file"
    label="Distribution Certificate"
    help={<a href="">Read more</a>}
    labelClassName="col-xs-3"
    wrapperClassName="col-xs-5"
    disabled={disabled}
  />
  <Input
    type="file"
    label="Distribution Key"
    help={<a href="">Read more</a>}
    labelClassName="col-xs-3"
    wrapperClassName="col-xs-5"
    disabled={disabled}
  />
  <Input
    type="password"
    label="Distribution Key Password"
    labelClassName="col-xs-3"
    wrapperClassName="col-xs-5"
    disabled={disabled}
  >
  </Input>
  <Input
    type="text"
    label="iTunes Connect User"
    labelClassName="col-xs-3"
    wrapperClassName="col-xs-5"
    disabled={disabled}
  >
  </Input>
  <Input
    type="password"
    label="iTunes Connect Password"
    labelClassName="col-xs-3"
    wrapperClassName="col-xs-5"
    disabled={disabled}
  >
  </Input>
  </div>
);
};

const signingAndroid = (disabled) => {
  return (
    <div>
    <hr/>
    <Input
      type="file"
      label="Store File"
      labelClassName="col-xs-3"
      wrapperClassName="col-xs-5"
      disabled={disabled}
    />
    <Input
      type="password"
      label="Store Password"
      labelClassName="col-xs-3"
      wrapperClassName="col-xs-5"
      disabled={disabled}
    >
    </Input>
    <Input
      type="text"
      label="Key Alias"
      labelClassName="col-xs-3"
      wrapperClassName="col-xs-5"
      disabled={disabled}
    >
    </Input>
    <Input
      type="password"
      label="Key Password"
      labelClassName="col-xs-3"
      wrapperClassName="col-xs-5"
      disabled={disabled}
    >
    </Input>
    </div>
  )
}
//let additonalFields = <h1>a</h1>;

const handleChange = (props) => (e) => {
  console.log(props, e.target.value);
  if (e.target.value === 'debugOnly')  {
    location.replace('#/version-index?fixtureIndex=2')
  }
  else  {
    location.replace('#/version-index?fixtureIndex=1')
  }
}

export const fixtures = [
  {
    label: "versions Index"
  },
  {
    label: "iOS Bulid Modal with signing",
    buildModalOpen: true,
    signing: signingIos(),
    icon: applIco
  },
  {
    label: "Bulid Modal without signing",
    buildModalOpen: true,
    icon: applIco
  },
  {
    label: "Android Bulid Modal without signing",
    buildModalOpen: true,
    signing: signingAndroid(),
    icon: andrIcon
  },
  {
    label: "Download Modal",
    downloadModalOpen: true,
  }
];

const VersionIndex = (props) => {
  return (
    <div className="container">
      <Navbar/>
      <div style={{paddingTop: 60}}>
      <Breadcrumb>
        <BreadcrumbItem href="#">
          Apps
        </BreadcrumbItem>
        <BreadcrumbItem active>
          App Name
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="pull-right"><a className="btn btn-primary">New Version</a></div>
      <h3>Versions</h3>
      <Table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Device Target</th>
            <th>SDK Version</th>
            <th><Nc><Note>Order table rows by version number</Note>Version</Nc></th>
            <th>Latest Build</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{applIco}</td>
          <td>Universal</td>
          <td>2.5.2</td>
          <td>1.2</td>
          <td>
            <Nc>
              <Note>Add timer from building start</Note>
              <ProgressBar bsStyle="success" active now={100} label="Building... (08:01)"/>
            </Nc>
          </td>

          <td>
            <ButtonToolbar className="pull-right">
              <DropdownButton disabled={true} title="settings">
                <MenuItem eventKey="1">General</MenuItem>
                <MenuItem eventKey="2">Styles</MenuItem>
                <MenuItem eventKey="3">Assets</MenuItem>
                <MenuItem eventKey="4">Localization</MenuItem>
              </DropdownButton>

              <Button bsStyle="success" disabled={true} onClick={()=>{ location.replace('#/version-index?fixtureIndex=1')}}><Glyphicon glyph="play"/></Button>
              <Note>On Build is in progeress-  editing and rebuilding are disabled</Note>
            </ButtonToolbar>
          </td>
        </tr>
        <tr>
          <td>{applIco}</td>
          <td>Universal</td>
          <td>2.5.2</td>
          <td>1.1</td>
          <td>n/a</td>
          <td>
            <ButtonToolbar className="pull-right">
              <DropdownButton title="settings">
                <MenuItem eventKey="1">General</MenuItem>
                <MenuItem eventKey="2">Styles</MenuItem>
                <MenuItem eventKey="3">Assets</MenuItem>
                <MenuItem eventKey="4">Localization</MenuItem>
              </DropdownButton>
              <Button bsStyle="success" onClick={()=>{ location.replace('#/version-index?fixtureIndex=1')}}><Glyphicon glyph="play"/></Button>
            </ButtonToolbar>
          </td>
        </tr>
          <tr>
            <td>{andrIcon}</td>
            <td>Universal</td>
            <td>2.5.2</td>
            <td>1.1</td>
            <td>n/a</td>
            <td>
              <ButtonToolbar className="pull-right">
                <DropdownButton title="settings">
                  <MenuItem eventKey="1">General</MenuItem>
                  <MenuItem eventKey="2">Styles</MenuItem>
                  <MenuItem eventKey="3">Assets</MenuItem>
                  <MenuItem eventKey="4">Localization</MenuItem>
                </DropdownButton>
                <Button bsStyle="success" onClick={()=>{ location.replace('#/version-index?fixtureIndex=3')}}><Glyphicon glyph="play"/></Button>
              </ButtonToolbar>
            </td>
          </tr>
          <tr>
            <td>{applIco}</td>
            <td>Universal</td>
            <td>2.5.2</td>
            <td>1.1</td>
            <td>n/a</td>
            <td>
              <ButtonToolbar className="pull-right">
                <DropdownButton title="settings">
                  <MenuItem eventKey="1">General</MenuItem>
                  <MenuItem eventKey="2">Styles</MenuItem>
                  <MenuItem eventKey="3">Assets</MenuItem>
                  <MenuItem eventKey="4">Localization</MenuItem>
                </DropdownButton>
                <Button bsStyle="warning"><Glyphicon glyph="alert"/></Button>
              </ButtonToolbar>
            </td>
          </tr>
          <tr>
            <td>{andrIcon}</td>
            <td>Universal</td>
            <td>2.5.2</td>
            <td>1.0</td>
            <td>
              <Button bsStyle="primary" onClick={()=>{ location.replace('#/version-index?fixtureIndex=4')}} >
                <Glyphicon glyph="save"/>
              </Button> <b>#34</b> Oct 22, 2015  17:22
            </td>
            <td>
              <ButtonToolbar className="pull-right">
                <DropdownButton title="settings">
                  <MenuItem eventKey="1">General</MenuItem>
                  <MenuItem eventKey="2">Styles</MenuItem>
                  <MenuItem eventKey="3">Assets</MenuItem>
                  <MenuItem eventKey="4">Localization</MenuItem>
                </DropdownButton>
                <Button bsStyle="success" ><Glyphicon glyph="play"/></Button>
              </ButtonToolbar>
            </td>
          </tr>
        </tbody>
      </Table>
      <Modal show={props.buildModalOpen} onHide={()=>{ location.replace('#/version-index')}}>
        <Modal.Header closeButton><Modal.Title>{props.icon} Build Version 1.0</Modal.Title></Modal.Header>
        <Modal.Body>
          <form className="form-horizontal">
          <Input
            type="select"
            label="Build Type"
            labelClassName="col-xs-3"
            wrapperClassName="col-xs-5"
            onChange={handleChange(props)}
          >
            <option value="debugNrelease">Debug & Release</option>
            <option value="debugOnly">Debug Only</option>
          </Input>
            {props.signing}
            <div className="col-xs-offset-3">
            <ButtonToolbar>
              <Button bsStyle="success">Build</Button>
              <Button>Cancel</Button>
            </ButtonToolbar>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <Modal show={props.downloadModalOpen} onHide={()=>{ location.replace('#/version-index')}}>
        <Modal.Header closeButton><Modal.Title>
          {andrIcon} App Name - Version 1.0 - build #34
        </Modal.Title><Note>Click on the QRcode to see the page it redirects to</Note></Modal.Header>
        <Modal.Body>
          <div className="text-center">

            <a href={`${location.origin}\#mobile-download`}>
              <QRCode  value={`${location.origin}\#mobile-download`} />
              <p>Scan QR Code from your mobile</p>
            </a>
          </div>
          <ListGroup>
            <ListGroupItem header="Debug Version" href="#">
              Version for debug purposes
            </ListGroupItem>
            <ListGroupItem bsStyle="success" header="Release Version" href="#">Store Version</ListGroupItem>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
    </div>
  )
}

VersionIndex.fixtures = fixtures;
export default VersionIndex;

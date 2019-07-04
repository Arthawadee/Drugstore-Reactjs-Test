import React, { Component } from "react";
import {
  Menu,
  Label,
  Icon,
  Header,
  Segment,
  Form,
  Button,
  Input,
  Divider,
  FormGroup,
  Grid,
  Sidebar,
  TextArea
} from "semantic-ui-react";
import "./AddNewPatient.css";

export default class AddNewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      activeItem: "home",
      visible: false,
      address: ""
    };
  }
  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    var { email, password, visible } = this.state;
    return (
      <div className="pageContent">
        {/* <Header as='div' className="head headName">First Header</Header> */}
        {/* <h1 class="ui icon header pageHeader" textAlign="left">
          เพิ่มผู้ป่วยรายใหม่
        </h1> */}

<h2 class="ui icon aligned header">
    <i aria-hidden="true" class="user plus circular icon"></i>
    <div class="content">เพิ่มผู้ป่วยรายใหม่</div>
  </h2>

        <div className="AddNewPatientForm">
          <Form>
            <div
              style={{
                width: "50%",
                display: "inline-block",
                paddingRight: "10px",
                paddingBottom: "15px"
              }}
            >
              <Form.Input
                required
                icon="user"
                iconPosition="left"
                label="ชื่อ"
                type="text"
                placeholder="กรุณากรอกชื่อ"
              />
            </div>

            <div style={{ width: "50%", display: "inline-block" }}>
              <Form.Input
                required
                icon="user"
                iconPosition="left"
                label="นามสกุล"
                type="text"
                placeholder="กรุณากรอกนามสกุล"
              />
            </div>

            <Form.Input
              required
              icon="user"
              iconPosition="left"
              label="เลขประจำตัวประชาชน"
              type="text"
              placeholder="กรุณากรอกเลขประจำตัวประชาชน"
            />
            <Form.Input
              required
              icon="user"
              iconPosition="left"
              label="เลขประจำตัวประชาชน"
              type="text"
              placeholder="กรุณากรอกเลขประจำตัวประชาชน"
            />
            <Form.Input
              required
              icon="user"
              iconPosition="left"
              label="เบอร์โทรศัพท์มือถือ"
              type="text"
              placeholder="กรุณากรอกเบอร์โทรศัพท์มือถือ"
            />
            <Form.Input
              required
              icon="user"
              iconPosition="left"
              label="เบอร์โทรศัพท์บ้าน"
              type="text"
              placeholder="กรุณากรอกเบอร์โทรศัพท์บ้าน"
            />
            <Form.TextArea
              required
              rows={5}
              label="ที่อยู่"
              value={this.state.address}
              placeholder="กรุณากรอกที่อยู่"
              onChange={e => {
                this.setState({ address: e.target.value });
                // console.log('address: '+ this.state.address)
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

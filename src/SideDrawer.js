import React, {Component} from 'react';
import { Menu,Label,Icon,Header,Segment,Form,Button,Input,Divider, FormGroup, Grid } from 'semantic-ui-react'
import { Image, Sidebar } from 'semantic-ui-react'

export default class SideDrawer extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        {/* <div class="ui primary buttons">
          <button class="ui icon button"><i aria-hidden="true" class="align justify icon"></i></button>
          
        </div> */}
        <Button icon disabled={visible} onClick={this.handleShowClick}>
          <Icon name='align justify' />
        </Button>
        {/* <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show sidebar
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide sidebar
          </Button>
        </Button.Group> */}

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

<Sidebar.Pusher dimmed={visible}>
  <Segment basic style={{backgroundColor: "#e3fbff"}}>
  <main style={{marginTop:'64px'}}>
                    <div className = "pageContent">
                    {/* <Header as='h1' icon textAlign='center'>
                        <Icon name='users' circular />
                        <Header.Content>ยินดีต้อนรับสู่</Header.Content>
                        <Header.Content>Drugstore Clinic</Header.Content>
                    </Header> */}
                    <h1 class="ui icon header pageHeader">
                        {/* <i aria-hidden="true" class="users icon"></i> */}
                        ยินดีต้อนรับสู่
                        {/* <div class="sub header">ยินดีต้อนรับสู่</div>
                        <div class="sub header">Drugstore Clinic</div> */}
                    </h1>
                    <div>
                        <h1 class="ui icon header pageHeader">Drugstore Clinic</h1>
                    </div>
                    
                    <Grid centered columns={3}>
                        <Grid.Column>
                            <Segment textAlign="center" inverted style={{backgroundColor: "#98d8e3"}}>
                                <Form >
                                    <h2 icon textAlign='center' className='loginHeader'>
                                        กรุณาลงชื่อเข้าสู่ระบบ
                                    </h2>
                                    <Divider />
                                    <div className = 'loginForm'>
                                        <Form.Input required icon='user' iconPosition='left' label='Email' type='email' placeholder='Enter Email'/>
                                        <Form.Input required icon='lock' iconPosition='left'label='Password' type='password' placeholder='Enter Password'/>
                                    </div>
                                    
                                    <a href='https://www.google.com/search?q=forgot+password&rlz=1C1OKWM_thTH854TH854&oq=forgot&aqs=chrome.2.69i57j0l5.5095j0j7&sourceid=chrome&ie=UTF-8'>ลืมรหัสผ่าน?</a>
                                    {/* <Button className='forgotPW' content='ลืมรหัสผ่าน?' color='blue'/> */}
                                    
                                </Form>
                            </Segment>
                            <div className='submitBtn'>
                                <Button content='เข้าสู่ระบบ' color='blue'/>
                            </div>
                            
                        </Grid.Column>
                    </Grid>
                </div>
                </main>
  </Segment>
</Sidebar.Pusher>
</Sidebar.Pushable>
</div>
)
}
}


// const Sidebar = props =>(
//   <div>
//         <Button.Group>
//           <Button disabled={visible} onClick={this.handleShowClick}>
//             Show sidebar
//           </Button>
//           <Button disabled={!visible} onClick={this.handleHideClick}>
//             Hide sidebar
//           </Button>
//         </Button.Group>

//         <Sidebar.Pushable as={Segment}>
//           <Sidebar
//             as={Menu}
//             animation='overlay'
//             icon='labeled'
//             inverted
//             onHide={this.handleSidebarHide}
//             vertical
//             visible={visible}
//             width='thin'
//           >
//             <Menu.Item as='a'>
//               <Icon name='home' />
//               Home
//             </Menu.Item>
//             <Menu.Item as='a'>
//               <Icon name='gamepad' />
//               Games
//             </Menu.Item>
//             <Menu.Item as='a'>
//               <Icon name='camera' />
//               Channels
//             </Menu.Item>
//           </Sidebar>

//           <Sidebar.Pusher dimmed={visible}>
//             <Segment basic>
//               <Header as='h3'>Application Content</Header>
//               <Image src='/images/wireframe/paragraph.png' />
//             </Segment>
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </div>
// );
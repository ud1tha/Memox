import { ChatEngine } from "react-chat-engine";
import './App.css';
import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';

const Application=()=>{

    if (!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
            height="100vh"
            projectID="af13444f-9017-413f-8211-6f5b14d4935c"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed{...chatAppProps}/>}
        />
    )
}
export default Application;
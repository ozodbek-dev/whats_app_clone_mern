import React from 'react';
import {Msg, MsgWrapper, Own, Time} from "./ChatBox.element";
import {formatDate} from "../../../utils/common-utils";
import {AccountState} from "../../../context/AccountProvider";

const Message = ({msg}) => {
    const {account} = AccountState()
    return (<>
            {account.sub === msg.senderId ? <Own>
                <Msg>
                    {msg.text}
                </Msg>
                <Time>
                    {formatDate(msg.createdAt)}
                </Time>
            </Own> : <MsgWrapper>
                <Msg>
                    {msg.text}
                </Msg>
                <Time>
                    {formatDate(msg.createdAt)}
                </Time>
            </MsgWrapper>}

        </>

    );
};

export default Message;
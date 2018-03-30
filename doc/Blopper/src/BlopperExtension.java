import com.smartfoxserver.v2.core.ISFSEvent;
import com.smartfoxserver.v2.core.SFSEventType;
import com.smartfoxserver.v2.exceptions.SFSException;
import com.smartfoxserver.v2.extensions.BaseServerEventHandler;
import com.smartfoxserver.v2.extensions.SFSExtension;


public class BlopperExtension extends SFSExtension {


    @Override
    public void init() {
        //ISFSEventListener isfsEventListener = new Listener();
        addEventHandler(SFSEventType.USER_JOIN_ROOM, RoomJoinHandler.class);
        addEventHandler(SFSEventType.USER_DISCONNECT, RoomLeaveHandler.class);
        trace("Extension importé avec succes");
        trace("version: 1.8");
    }


}


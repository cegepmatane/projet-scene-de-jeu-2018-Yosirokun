import com.smartfoxserver.v2.core.ISFSEvent;
import com.smartfoxserver.v2.core.SFSEventParam;
import com.smartfoxserver.v2.entities.Room;
import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.variables.RoomVariable;
import com.smartfoxserver.v2.entities.variables.SFSRoomVariable;
import com.smartfoxserver.v2.entities.variables.SFSUserVariable;
import com.smartfoxserver.v2.entities.variables.UserVariable;
import com.smartfoxserver.v2.exceptions.SFSException;
import com.smartfoxserver.v2.extensions.BaseServerEventHandler;

import java.util.ArrayList;
import java.util.List;


public class RoomJoinHandler extends BaseServerEventHandler {
    @Override
    public void handleServerEvent(ISFSEvent e) throws SFSException {
        trace("RoomJoinHandler - le handler marche");
        User utilisateur = (User)e.getParameter(SFSEventParam.USER);
        Room salon = (Room) e.getParameter(SFSEventParam.ROOM);

        int nombreDejoueur = salon.getVariable("nombreJoueurActif").getIntValue() + 1;
        RoomVariable variableSalon = new SFSRoomVariable("nombreJoueurActif", nombreDejoueur);
        List<RoomVariable> listeVariables = new ArrayList<RoomVariable>();
        listeVariables.add(variableSalon);
        trace("nombre de joueur: " + nombreDejoueur);

        getApi().setRoomVariables(utilisateur, salon, listeVariables);
        //salon.setVariable(variableSalon);
    }
}

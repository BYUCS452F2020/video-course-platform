import SQLiteUserDao from '../dao/sqliteDao/SQLiteUserDao.js'; 
import {LoginResponse} from '../../shared/shared.js'; 
import ServiceHelper from './ServiceHelper.js'; 

export default class LoginService {
  loginUser(loginRequest, onResponseCallback) {
    let dao = new SQLiteUserDao(); 
    dao.getUser(loginRequest.username, loginRequest.password, this.returnLoginResponse, onResponseCallback);
  }

  // Note: Additional callbacks should only hold our onResponseCallback. 
  returnLoginResponse(user, error, additionalCallbacks) {
    if (user !== null) { 
      console.log(user); 
      additionalCallbacks[0](new LoginResponse("OK: 200; Success!", true, user)); 
    }
    else if (error !== null) {
      additionalCallbacks[0](new LoginResponse(ServiceHelper.appendServerErrorNumber(error, 'Bad user credentials.'), false, null));
    }
  }
}
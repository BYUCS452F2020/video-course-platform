import SQLiteUserDao from '../dao/sqliteDao/SQLiteUserDao.js'; 
import {LoginResponse} from '../../shared/shared.js'; 
import Service from './Service.js'; 

export default class LoginService extends Service {
  static loginUser(loginRequest) {
    let dao = new SQLiteUserDao(); 
    dao.getUser(loginRequest.username, loginRequest.password).then(user => {
      console.log(user); 
      return new LoginResponse("OK: 200; Success!", true, user);
    }).catch(error => {
      return new LoginResponse(this.appendServerErrorNumber('Bad user credentials.') , false, null); 
    }); 
  }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:3000";

var httpLink = {
  getAllEmployee: apiUrl + "/user/getAllUser",
  deleteEmployeeById: apiUrl + "/user/deleteUser",
  getEmployeeDetailById: apiUrl + "/user/getUserById",
  saveEmployee: apiUrl + "/user/createUser",
  updateEmployee: apiUrl + "/user/updateUser"
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllEmployee(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEmployee);
  }

  public deleteEmployeeById(model: any): Observable<any> {
    return this.webApiService.delete(httpLink.deleteEmployeeById + '/' + model);
  }

  public getEmployeeDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getEmployeeDetailById + '/' + model);
  }
  
  public saveEmployee(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveEmployee, model);
  }

  public updateEmployeeById(model: any): Observable<any> {
    return this.webApiService.patch(httpLink.updateEmployee + '/' + model._id,model);
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileUrl = environment.localServer +'user/';
  constructor(public global:GlobalService,public http:HttpClient) { }
getProfileDetailithId(id){
  return this.http.get(this.profileUrl+'data:'+id).pipe(
    map((x)=>{return x}),
    catchError(this.global.handleError)
  )
}
fnUpdateUser(user,id){
  return this.http.put(this.profileUrl+'update:'+id,user).pipe(
    map((x)=>{return x})
    ,catchError(this.global.handleError)
  )
}
fngetStudentdetail(id){
  return this.http.get(this.profileUrl+'studentdetail/get:'+id).pipe(
    map((x)=>{return x}),catchError(this.global.handleError)
   ) 
}
fngetTeacherDetails(id){
   return this.http.get(this.profileUrl+'teacherdetail/get:'+id).pipe(
    map((x)=>{return x}),catchError(this.global.handleError)
   ) 
}
}

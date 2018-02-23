import {Component, Injectable} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';   
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {HttpClient,HttpHeaders, HttpInterceptor} from '@angular/common/http' 
import { HttpEvent,  HttpHandler, HttpRequest } from '@angular/common/http';
import { Http } from '@angular/http/src/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

@Component({

    selector:'login-app',
    templateUrl :'./login.component.html',
    styleUrls :['./login.component.css']


})
export class LoginComponent {

};


@Injectable()
/* http interceptor  --poner a prueba--- */
export class Interceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("intercepted request ... ");

        // Clone the request to add the new header.
        const authReq = req.clone(
            {
                headers: req.headers.set("headerName", "headerValue")
            }
        );

        console.log("Sending request with new header now ...");

        //send the newly created request
        return next.handle(authReq)
            .catch((error, caught) => {
                //intercept the respons error and displace it to the console 
                console.log("Error Occurred");
                console.log(error);
                //return the error to the method that called it
                return Observable.throw(error);
            }) as any;
    }
}





















/* 
@Injectable()
 export class HttpInterceptor extends Http  {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions,private router :Router){
        
        super(backend, defaultOptions);
}
request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, options));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.get(url, options)); // Here is the error
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(options))); 
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(options))); 
        }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, options)); // Here is the error
    }

    getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers(); // Here is the error
        }
        options.headers.append('Content-Type', 'application/json');
        return options;
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        return observable.catch((err, source) => {
            if (err.status == 401 && !_.endsWith(err.url, 'api/auth/login')) {
                this._router.navigate(['/login']);
                return Observable.empty();
            } else {
                return Observable.throw(err);
            }
        });

    }

}



 */
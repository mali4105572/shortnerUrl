import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class WebApiHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const a = req.clone({ url: `${window.location.origin}/${req.url}` })
        if ((/[^:]\/\//.test(req.url))) {
            req = req.clone({
                url: req.url.replace(/([^:])\/\//g, '$1/')
            });
        }
        if (!/http/.test(req.url) && !/^\./.test(req.url)) {
            req = req.clone({
                url: req.url.replace(/(api\/)+/gm, 'api/')
            });
        }
        return next.handle(req);
    }
}

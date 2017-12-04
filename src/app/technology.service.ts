import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Technology } from './techology';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TechnologyService {
private technologyURL =   "http://192.168.1.100:97/api/Technologies";
constructor(private http: HttpClient) {}

CreateTechnology(technology: Technology)
{
    return this.http.post<Technology>(this.technologyURL, technology, httpOptions)
    .pipe(
      tap((tech: Technology) => console.log("Added new Item Id"))
    );
  
}

  ReadTechnologies()
  {
    return this.http.get<Technology[]>(this.technologyURL).pipe(
      tap(technologies => console.log("Technologies Fetched"))
    );
  }

  DeleteTechnology(id: string)
  {
    //alert(this.technologyURL+"/"+ id)
     return this.http.delete<Technology>(this.technologyURL+"/"+ id).pipe(
      tap((tech: Technology) => console.log("Technology Deleted Id=" + tech.Id))
     );
  }

  // private extractData(res: Response) {
  //   let body = res.json();
  //     }
  // private handleErrorObservalble(error: Response | any)
  // {
  //   console.error(error.message || error);
  // }

}
